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

  var toDoCount = 0;
  var name= "";
  var phone= "";
  var item= "";
  var description= "";
  var price= "";
  var category= "";
  var location= "";

  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();
  
  var output = (day<10 ? '0' : '') + day + '/' +
      (month<10 ? '0' : '') + month + '/' +
      d.getFullYear();

 // VIEWER COUNTER-----------------------------------------------------------------

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

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

 // ON BUTTON SELECT FORM-----------------------------------------------------------------
 $('input#name, input#phone, input#item, input#price, input#description').characterCounter();

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
    $('.modal').modal();
    validate();
    $('#name, #phone, #description, #category, #location, #price, #item').change(validate);

function validate(){
    if ($('#name').val().length   >   0   &&
        $('#phone').val().length  >   0   &&
        $('#description').val().length  >   0   &&
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

      var name= $("#name").val().trim();
      var phone= $("#phone").val().trim();
      var email= $("#email").val().trim();
      var item= $("#item").val().trim();
      var description= $("#description").val().trim();
      var price= $("#price").val().trim();
      var category= $('select#category').val();
      var location= $('select#location').val();

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
$('#category option:eq(0)').attr('selected','selected');
$("#location").val("defaultValue");
$("#email").val("");
// Add to the toDoCount
toDoCount++;
$("#add-to-do").addClass("disabled")

      
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

    $("#number").html(childSnapshot.val().id+ " "+ "Articulos en venta");
    // full list of items to the well
    $("#to-dos").append(
        "<div id="+childSnapshot.val().id+" " + "class='card col s3 hoverable'>"+
        "<div class='card-image waves-effect waves-block waves-light'>" +
        "<img class='activator' src="+"'"+childSnapshot.val().category+"'"+"></img>"+
        "</div>"+
        "<div class='card-content'>"+
        "<span class='card-title activator grey-text text-darken-4'>"+childSnapshot.val().item+"</span><i class='material-icons right'>more_vert</i>"+
        "<p><a href="+"'"+childSnapshot.val().phone+"'"+ "class='waves-effect waves-light btn-small contactar'>Contactar</a></p>"+
        "</div>"+
        "<div class='card-reveal'>"+
        "<span class='card-title grey-text text-darken-4'>"+childSnapshot.val().item+"<i class='material-icons right'>close</i></span>"+
        "<p>"+childSnapshot.val().description+"</p>"+
        "<p>$ "+ childSnapshot.val().price +" MXN - "+childSnapshot.val().location+" - ID:"+childSnapshot.val().id+"</p>"+
        "</div>"+
        "</div>"+ "<div class='col'>"+"</div>"
);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment);
  });

});
