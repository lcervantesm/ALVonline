$(document).ready(function() {
    $("#uploadButton").hide();
    $("#exito").hide();
    $("#filerurl").hide();
    $('.tap-target').tapTarget();
  // Initialize Firebase-----------------------------------------------------------------
  var config = {
    apiKey: "AIzaSyC9sJ8GtsGTdC_wZ__CqZX29G03Gah-ns8",
    authDomain: "alvonline.firebaseapp.com",
    databaseURL: "https://alvonline.firebaseio.com",
    projectId: "alvonline",
    storageBucket: "alvonline.appspot.com",
    messagingSenderId: "858746985142"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var toDoCount = 0;
  var item= "";
  var description= "";
  var price= "";
  var category= "";
  var location= "";
  var selectedFile= " ";

  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();
  var time=d.getTime();

  var output = (day<10 ? '0' : '') + day + '/' +
      (month<10 ? '0' : '') + month + '/' +
      d.getFullYear();

 // VIEWER COUNTER-----------------------------------------------------------------

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var adnumber = database.ref("/ads");
var registerusers =database.ref("/users");

connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
  $("#number1").text(snap.numChildren());
  $("#number1").append(""+ " "+"Personas comprando");
});

adnumber.on("value",function(snap) {
$("#number").text(snap.numChildren());
$("#number").append(""+ " "+"Articulos en venta");
toDoCount= snap.numChildren();
});

registerusers.on("value",function(snap){
    $("#number2").text(snap.numChildren());
    $("#number2").append(""+ " "+"Usuarios Registrados")
})

 // ON BUTTON SELECT FORM-----------------------------------------------------------------
 $('input#item, input#price, input#description').characterCounter();
 $('input#username, input#userphone, input#useremail, input#userlocation, input#userpassword').characterCounter();

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
    $('.modal').modal();
    $('.collapsible').collapsible();
    validate();
    $('#description, #category, #location, #price, #item').change(validate);

function validate(){
    if ($('#description').val().length  >   0   &&
        $('#category').val().length  >   0   &&
        $('#location').val().length  >   0   &&
        $('#price').val().length  >   0   &&
        $('#item').val().length    >   0) {
        $('#add-to-do').removeClass("disabled");
    }
    else {
        $("#add-to-do").addClass("disabled");
    }
}

$('select').formSelect();

$("#add-to-do").on("click", function(event) {
      event.preventDefault();

      toDoCount++;

      var name= userloginname;
      var phone= userloginphone;
      var email= userloginemail;
      var item= $("#item").val().trim();
      var description= $("#description").val().trim();
      var price= $("#price").val().trim();
      var category= $('select#category').val();
      var location= $('select#location').val();
      var status=$('select#status').val();
      var itemimage= null;
      var imagecard= $("#fileurl").html();
      var consola= $('select#consola').val();

      database.ref("ads").push({
        name: name,
        phone: phone,
        email: email,
        item: item,
        description: description,
        price: price,
        category: category,
        consola:consola,
        location:location,
        dateposted:output,
        id:toDoCount,
        image: imagecard,
        status:status,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,

      });
// Clear the textbox when done
$("#to-do").val("");
$("#to-do2").val("");
$("#name").val("");
$("#phone").val("");
$("#item").val("");
$("#description").val("");
$("#price").val("");
$('#category').addClass();
$("#location").addClass();
$("#email").val("");
$("#fileurl").html("");
// Add to the toDoCount
$("#add-to-do").addClass("disabled");
$("#exito").hide();
$("#uploadButton").hide();
      
    });



$("#new-register").on("click", function(event) {
    event.preventDefault();

    var username= $("#username").val().trim();
    var userphone= $("#userphone").val().trim();
    var useremail= $("#useremail").val().trim();
    var userlocation= $('select#userlocation').val();
    var userpassword= $('#userpassword').val();
    var useraviso= $('#aviso').val();
    var userid= 1;
   

    database.ref("users").push({
     username: username,
      userphone: userphone,
      useremail: useremail,
      userlocation:userlocation,
      userpassword:userpassword,
      useraviso:useraviso,
      dateposted:output,
      userid:userid,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });
// Clear the textbox when done
$("#username").val("");
$("#userphone").val("");
$("#useremail").val("");
$("#userpassword").val("");
$("#phone").val("");
$("#item").val("");
$("#userlocation").val("");


$("#new-register").addClass("disabled")

    
  });
  $("#loginbutton").on("click", function(event) {
    event.preventDefault();


    var emaillogin= $("#emaillogin").val().trim();
    var contraseñalogin= $("#contraseñalogin").val().trim();


    database.ref('users').orderByChild("useremail").equalTo(emaillogin).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          userlogin= data.val().userpassword;
          userloginname= data.val().username;
          userloginphone= data.val().userphone;
          userloginlocation =data.val().userlocation;
          userloginemail =data.val().useremail;

        });

        if (userlogin=contraseñalogin) {
            
            $("#loginmodal").html("Haz inciado sesion"+" "+ userloginname + "<hr>"+"Puedes publicar con el icono rojo y el signo de mas");
            $('#posticon').removeClass("hide");
            $("#nombre").html(userloginname);
            $("#phone").html(userloginphone);
            $("#email").html(userloginemail);
            $('#usericon').addClass("hide");
            $('#viewicon').removeClass("hide");

            database.ref('ads').orderByChild("email").equalTo(userloginemail).on("value", function(snapshot) {
                snapshot.forEach(function(data) {
                    $("#userads").html(
                "<li>"+
                  "<div className='collapsible-header'>"+"<i className='material-icons'>filter_drama</i>"+snapshot.val().item+"</div>"+
                  "<div className='collapsible-body'><span>"+snapshot.val().description+"</span></div>"+
               "</li>"
              );  
                });
            
            });

          } else {
            console.log("The email or password is incorrect");
            $("#status").html("The email or password is incorrect, please try again");
          }
    });

  });
  
  $("#file").on("change",function(event){
    selectedFile= event.target.files[0];
    $("#uploadButton").show();

  });

  $("#uploadButton").on("click", function uploadFile() {
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('/itemimages/'+ filename);
     var uploadTask= storageRef.put(selectedFile);

     uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          itemimage= downloadURL;
          $("#fileurl").html(itemimage);
          $("#fileurl").addClass("hide");
          $("#exito").show();
        
        });
      });
        });
//DELETE------------------------------------------------------------------------------------------------------------------------ 
    // When a user clicks a check box then delete the specific content
    // (NOTE: Pay attention to the unusual syntax here for the click event.
    // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
    $(document.body).on("click", ".checkbox", function() { 
      var toDoNumber = $(this).attr("data-to-do");
      $("#item-" + toDoNumber).remove();
    });
   // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
   database.ref("ads").on("child_added", function(childSnapshot) {
    // full list of items to the well
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
//   Filters------------------------------------------------------------------------------------------------
  $("#Consolas").on("click", function() { 
    $("#to-dos").html("");
    var ref = database.ref("ads");

    ref.orderByChild("consola").on("child_added", function(snapshot) {
        $("#to-dos").prepend(
            "<div id="+snapshot.val().id+" " + "class='card col s12 m4 l4 xl3 hoverable card'>"+
            "<div class='card-image waves-effect waves-block waves-light'>" +
            "<img class='activator cardimage' src="+"'"+snapshot.val().image+"'"+"></img>"+
            "</div>"+
            "<div class='card-content "+snapshot.val().consola+"'>"+
            "<span class='activator titulo'>"+snapshot.val().item+"</span>"+
            "</div>"+
    
            "<div class='card-details'>"+
            "<p><i class='tiny material-icons'>videogame_asset</i> " +snapshot.val().category+" "+snapshot.val().consola+"</p>"+
             "<p><i class='tiny material-icons'>place</i> "+snapshot.val().location+"</p>"+
             "<p><i class='tiny material-icons'>class</i> "+snapshot.val().status+"</p>"+
             "<p><i class='tiny material-icons'>monetization_on</i> "+snapshot.val().price+" MXN</p>"+
             "<p><i class='tiny material-icons'>date_range</i> "+snapshot.val().dateposted+"</p>"
             +"<hr></hr>"+
             "</div>"+ 
            "<div class='modal-footer center'>"+
            "<a href=tel:'"+snapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+snapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
            "</div>"+
            
            "<div class='card-reveal'>"+
            "<span class='card-title titulo"+snapshot.val().consola+"'>"+snapshot.val().item+"</span>"+
            "<p><i class='tiny material-icons'>videogame_asset</i> "+snapshot.val().consola+"</p>"+
            "<hr></hr>"+
            "<p ><i class='tiny material-icons'>description</i> "+snapshot.val().description+"</p>"+
            "<hr></hr>"+
            "<img class='responsive-img' src='"+snapshot.val().image+"'>"+
            "<hr></hr>"+
            "<a href=tel:'"+snapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+snapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"    




        );
    });
});

$("#PS4").on("click", function() { 
    $("#to-dos").html("");
    var ref = database.ref("ads");

    ref.orderByChild("consola").equalTo("PS4").on("child_added", function(snapshot) {
        $("#to-dos").prepend(
            "<div id="+snapshot.val().id+" " + "class='card col s12 m4 l4 xl3 hoverable card'>"+
            "<div class='card-image waves-effect waves-block waves-light'>" +
            "<img class='activator cardimage' src="+"'"+snapshot.val().image+"'"+"></img>"+
            "</div>"+
            "<div class='card-content "+snapshot.val().consola+"'>"+
            "<span class='activator titulo'>"+snapshot.val().item+"</span>"+
            "</div>"+
    
            "<div class='card-details'>"+
            "<p><i class='tiny material-icons'>videogame_asset</i> " +snapshot.val().category+" "+snapshot.val().consola+"</p>"+
             "<p><i class='tiny material-icons'>place</i> "+snapshot.val().location+"</p>"+
             "<p><i class='tiny material-icons'>class</i> "+snapshot.val().status+"</p>"+
             "<p><i class='tiny material-icons'>monetization_on</i> "+snapshot.val().price+" MXN</p>"+
             "<p><i class='tiny material-icons'>date_range</i> "+snapshot.val().dateposted+"</p>"
             +"<hr></hr>"+
             "</div>"+ 
            "<div class='modal-footer center'>"+
            "<a href=tel:'"+snapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+snapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
            "</div>"+
            
            "<div class='card-reveal'>"+
            "<span class='card-title titulo"+snapshot.val().consola+"'>"+snapshot.val().item+"</span>"+
            "<p><i class='tiny material-icons'>videogame_asset</i> "+snapshot.val().consola+"</p>"+
            "<hr></hr>"+
            "<p ><i class='tiny material-icons'>description</i> "+snapshot.val().description+"</p>"+
            "<hr></hr>"+
            "<img class='responsive-img' src='"+snapshot.val().image+"'>"+
            "<hr></hr>"+
            "<a href=tel:'"+snapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+snapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"    




        );
    });
});

  database.ref("ads").on("child_added", function(childSnapshot) {

    $("#number").html(childSnapshot.val().id+ " "+ "Articulos en venta");
    // full list of items to the well
    $("#to-dos").prepend(
        "<div id="+childSnapshot.val().id+" " + "class='card col s12 m4 l4 xl3 hoverable card'>"+
        "<div class='card-image waves-effect waves-block waves-light'>" +
        "<img class='activator cardimage' src="+"'"+childSnapshot.val().image+"'"+"></img>"+
        "</div>"+
        "<div class='card-content "+childSnapshot.val().consola+"'>"+
        "<span class='activator titulo'>"+childSnapshot.val().item+"</span>"+
        "</div>"+

        "<div class='card-details'>"+
        "<p><i class='tiny material-icons'>videogame_asset</i> " +childSnapshot.val().category+" "+childSnapshot.val().consola+"</p>"+
         "<p><i class='tiny material-icons'>place</i> "+childSnapshot.val().location+"</p>"+
         "<p><i class='tiny material-icons'>class</i> "+childSnapshot.val().status+"</p>"+
         "<p><i class='tiny material-icons'>monetization_on</i> "+childSnapshot.val().price+" MXN</p>"+
         "<p><i class='tiny material-icons'>date_range</i> "+childSnapshot.val().dateposted+"</p>"
         +"<hr></hr>"+
         "</div>"+ 
        "<div class='modal-footer center'>"+
        "<a href=tel:'"+childSnapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+childSnapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
        "</div>"+
        
        "<div class='card-reveal'>"+
        "<span class='card-title titulo"+childSnapshot.val().consola+"'>"+childSnapshot.val().item+"</span>"+
        "<p><i class='tiny material-icons'>videogame_asset</i> "+childSnapshot.val().consola+"</p>"+
        "<hr></hr>"+
        "<p ><i class='tiny material-icons'>description</i> "+childSnapshot.val().description+"</p>"+
        "<hr></hr>"+
        "<img class='responsive-img' src='"+childSnapshot.val().image+"'>"+
        "<hr></hr>"+
        "<a href=tel:'"+childSnapshot.val().phone+"´ class='waves-effect waves-light btn-small z-depth-1 contactar'><i class='material-icons tiny'>call</i></a>"+"<a href= mailto:'"+childSnapshot.val().email+"´ class='waves-effect waves-light btn-small z-depth-1 contactar2'><i class='material-icons tiny'>mail</i></a>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"
    
);  
$("#userads").prepend(
"<li class= 'collection-item avatar'>"+
    "<div class='collapsible-header'>"+"<i class='material-icons'>"+"<img class='circle' src="+"'"+childSnapshot.val().image+"'"+"></img>"+"</i>"+childSnapshot.val().item+"</div>"+
    "<div class='collapsible-body'>"+"<span>"+childSnapshot.val().description+"</span>"+"</div>"+
 "</li>");  

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


});
