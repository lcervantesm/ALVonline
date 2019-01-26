$(document).ready(function() {
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
  
    var usernumber = 0;
    var username= "";
    var userphone= "";
    var useremail="";
    var userlocation= "";
    var userpassword="";
  
    var d = new Date();
  
    var month = d.getMonth()+1;
    var day = d.getDate();
    var time=d.getTime();
    
    var output = (day<10 ? '0' : '') + day + '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear();
  
   // ON BUTTON SELECT FORM-----------------------------------------------------------------
   $('input#username, input#userphone, input#useremail, input#userlocation, input#userpassword').characterCounter();
  
   document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, options);
    });
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal3');
      var instances = M.Modal.init(elems, options);
    });


      $('.modal3').modal();
      validate();
      $('input#username, input#userphone, input#useremail,input#userpassword, input#userlocation').change(validate);
  
  function validate(){
      if ($('#username').val().length   >   0   &&
          $('#userphone').val().length  >   0   &&
          $('#useremail').val().length  >   0   &&
          $('#userpassword').val().length  >   0 )  {
          $('#new-register').removeClass("disabled");
      }
      else {
          $("#new-register").addClass("disabled");
      }
  }
  
  $('select').formSelect();
  
  $("#new-register").on("click", function(event) {
        event.preventDefault();
  
        var username= $("#username").val().trim();
        var userphone= $("#userphone").val().trim();
        var useremail= $("#useremail").val().trim();
        var userlocation= $('userelocation').val();
        var userpassword= $('#userpassword').val();
        var useraviso= $('#aviso').val();
  
        database.ref("users").push({
         username: username,
          userphone: userphone,
          useremail: useremail,
          userlocation:userlocation,
          userpassword:userpassword,
          useraviso:useraviso,
          dateposted:output,
          userid:userid,
          time:time,
          dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });
  // Clear the textbox when done
  $("#username").val("");
  $("#userphone").val("");
  $("#useremail").val("");
  $("#phone").val("");
  $("#item").val("");
  $("#userlocation").val("");

 
  $("#new-register").addClass("disabled")
  
        
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
  
    //   $("#number").html(childSnapshot.val().id+ " "+ "Articulos en venta");
      // full list of items to the well
    //   $("#to-dos").append(
    //       "<div id="+childSnapshot.val().id+" " + "class='card col s12 m4 l4 xl3 hoverable card small'>"+
    //       "<div class='card-image waves-effect waves-block waves-light'>" +
    //       "<img class='activator center-align responsive-img' src="+"'"+childSnapshot.val().category+"'"+"></img>"+
    //       "</div>"+
    //       "<div class='card-content'>"+
    //       "<span class='card-title activator grey-text text-darken-4'flow-text>"+childSnapshot.val().item+"</span><i class='material-icons right'>more_vert</i>"+
    //       "<p><a href="+"'"+childSnapshot.val().phone+"'"+ "class='waves-effect waves-light btn-small contactar flow-text'>Contactar</a></p>"+
    //       "</div>"+
    //       "<div class='card-reveal'>"+
    //       "<span class='card-title grey-text text-darken-4 flow-text'>"+childSnapshot.val().item+"<i class='material-icons right'>close</i></span>"+
    //       "<p class='flow-text'>"+childSnapshot.val().description+"</p>"+
    //       "<p class='flow-text'>$ "+ childSnapshot.val().price +" MXN - "+childSnapshot.val().location+" - ID:"+childSnapshot.val().id+"</p>"+
    //       "</div>"+
    //       "</div>"
      
//   );
 
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});