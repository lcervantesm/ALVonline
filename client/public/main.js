$(document).ready(function() {
    $("#uploadButton").hide();
    $("#exito").hide();
    $("#filerurl").hide();
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
      var itemimage= null;
      var imagecard= $("#fileurl").html();

      database.ref("ads").push({
        name: name,
        phone: phone,
        email: email,
        item: item,
        description: description,
        price: price,
        category: category,
        location:location,
        dateposted:output,
        id:toDoCount,
        image: imagecard,
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

  database.ref("ads").on("child_added", function(childSnapshot) {

    $("#number").html(childSnapshot.val().id+ " "+ "Articulos en venta");
    // full list of items to the well
    $("#to-dos").prepend(
        "<div id="+childSnapshot.val().id+" " + "class='card col s12 m4 l4 xl3 hoverable card'>"+
        "<div class='card-image waves-effect waves-block waves-light'>" +
        "<img class='activator cardimage' src="+"'"+childSnapshot.val().image+"'"+"></img>"+
        "</div>"+
        "<div class='card-content'>"+
        "<span class='activator titulo'>"+childSnapshot.val().item+"</span><i class='material-icons right'>more_vert</i>"+
        "<p><a href="+"'"+childSnapshot.val().phone+"'"+ "class='waves-effect waves-light btn-small contactar flow-text'>Contactar</a></p>"+
        "</div>"+


        "<div class='card-reveal'>"+
        "<span class='card-title grey-text text-darken-4 flow-text'>"+childSnapshot.val().item+"<i class='material-icons right'>close</i></span>"+
        "<p class='flow-text'>"+childSnapshot.val().description+"</p>"+
        "<p class='flow-text'>$ "+ childSnapshot.val().price +" MXN - "+childSnapshot.val().location+" - ID:"+childSnapshot.val().id+"</p>"+
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
