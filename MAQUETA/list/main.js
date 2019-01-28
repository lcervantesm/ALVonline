// $(document).ready(function() {
//     $('input#name, input#phone, input#item, input#price, input#description').characterCounter();

//      document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.chips');
//     var instances = M.Chips.init(elems, options);
//   });
//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
//     var elems = document.querySelectorAll('.modal2');
//     var instances = M.Modal.init(elems, options);
//   });
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyC9sJ8GtsGTdC_wZ__CqZX29G03Gah-ns8",
//     authDomain: "alvonline.firebaseapp.com",
//     databaseURL: "https://alvonline.firebaseio.com",
//     projectId: "alvonline",
//     storageBucket: "alvonline.appspot.com",
//     messagingSenderId: "858746985142"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();

//   // -------------------------------------------------------------- (CRITICAL - BLOCK) --------------------------- //
// // connectionsRef references a specific location in our database.
// // All of our connections will be stored in this directory.
// var connectionsRef = database.ref("/connections");

// // '.info/connected' is a special location provided by Firebase that is updated every time
// // the client's connection state changes.
// // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
// var connectedRef = database.ref(".info/connected");

// // When the client's connection state changes...
// connectedRef.on("value", function(snap) {

//   // If they are connected..
//   if (snap.val()) {

//     // Add user to the connections list.
//     var con = connectionsRef.push(true);

//     // Remove user from the connection list when they disconnect.
//     con.onDisconnect().remove();
//   }
// });

// // When first loaded or when the connections list changes...
// connectionsRef.on("value", function(snap) {

//   // Display the viewer count in the html.
//   // The number of online users is the number of children in the connections list.
//   $("#number1").text(snap.numChildren());
//   $("#number1").append(" "+"Personas comprando");
// });

// // -------------------------------------------------------------- (CRITICAL - BLOCK) --------------------------- //
// // Set Initial Counter
//   // Or with jQuery


//   $(document).ready(function(){
//     $('.modal').modal();
//     $('.modal2').modal();
//     $('.modal3').modal();
//     validate();
//     $('#name, #phone, #description, #category, #location, #price, #item').change(validate);
//   });
//   $('.modal2').modal();
// function validate(){
//     if ($('#name').val().length   >   0   &&
//         $('#phone').val().length  >   0   &&
//         $('#description').val().length  >   0   &&
//         $('#category').val().length  >   0   &&
//         $('#location').val().length  >   0   &&
//         $('#price').val().length  >   0   &&
//         $('#item').val().length    >   0) {
//         $('#add-to-do').removeClass("disabled");
//     }
//     else {
//         $("#add-to-do").addClass("disabled");
//     }
// }

//   // Or with jQuery

//     $('select').formSelect();


//     // Create an initial toDoCount variable
//     var toDoCount = 0;

//     //  On Click event associated with the add-to-do function
//     $("#add-to-do").on("click", function(event) {
//       event.preventDefault();

//       // Get the to-do "value" from the textbox and store it a variable
//       var name= $("#name").val().trim();
//       var phone= $("#phone").val().trim();
//       var item= $("#item").val().trim();
//       var description= $("#description").val().trim();
//       var price= $("#price").val().trim();
//       var category= $('select#category').val();
//       var location= $('select#location').val();
      
//       dataRef.ref().push({

//         name: name,
//         phone: phone,
//         item: item,
//         description: description,
//         price: price,
//         category: category,
//         location:location,
//         dateAdded: firebase.database.ServerValue.TIMESTAMP

//       });

//             // Clear the textbox when done
//             $("#to-do").val("");
//             $("#to-do2").val("");
//             $("#name").val("");
//             $("#phone").val("");
//             $("#item").val("");
//             $("#description").val("");
//             $("#price").val("");
//             $("#category").val("");
//             $("#location").val("");
//             // Add to the toDoCount
//             toDoCount++;
//             $("#add-to-do").addClass("disabled")
//             $("#number").html(toDoCount + " "+ "Articulos en venta");
//     });

//       dataRef.ref().on("child_added", function(childSnapshot) {

//         // Log everything that's coming out of snapshot
//         console.log(childSnapshot.val().name);
//         console.log(childSnapshot.val().phone);
//         console.log(childSnapshot.val().item);
//         console.log(childSnapshot.val().description);
//         console.log(childSnapshot.val().price);
//         console.log(childSnapshot.val().category);
//         console.log(childSnapshot.val().location);
//         console.log(childSnapshot.val().joinDate);
//       // Create a new variable that will hold a "<p>" tag.
//       // Then give it an ID in the following form:
//       // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
//       // Then append the to-do "value" as text to this <p> element.
//       var toDoItem = $("<div>");
//       var imagecontainer= $("<div>");
//       var image= $("<img>");
//       var titlecontainer= $("<div>");
//       var title= $("<span>");
//       var more= $("<i>");
//       var linkcontainer= $("<p>");
//       var link=$("<a>");
//       var descriptioncontainer= $("<div>");
//       var descriptiontitle= $("<span>");
//       var close =$("<i>");
//       var descriptiontext=$("<p>");
//       var space=$("<div>");

//       toDoItem.attr("id", "item-" + toDoCount);
//       toDoItem.attr("class", "card col s12 hoverable");
//       imagecontainer.attr("class", "card-image waves-effect waves-block waves-light");
//       image.attr("class","activator");
//       image.attr("src", childSnapshot.val().category);
//       titlecontainer.attr("class","card-content");
//       title.attr("class","card-title activator grey-text text-darken-4");
//       more.attr("class", "material-icons right");
//       link.attr("href","tel:"+childSnapshot.val().phone);
//       link.attr("class","waves-effect waves-light btn-small contactar");
//       descriptioncontainer.attr("class", "card-reveal");
//       descriptiontitle.attr("class","card-title grey-text text-darken-4");
//       close.attr("class","material-icons right");
//       space.attr("class","col");

// // AD STRUCTURE
// toDoItem.append(imagecontainer);
// toDoItem.append(titlecontainer);
// toDoItem.append(descriptioncontainer);

// // IMAGE CONTAINER
// imagecontainer.append(image);
// // TITLE CONTAINER
// titlecontainer.append(title);
// titlecontainer.append(more);
// titlecontainer.append(linkcontainer);

// // LINK CONTAINER
// linkcontainer.append(link);

// // DESCRIPTION CONTAINER
// descriptioncontainer.append(descriptiontitle)
// descriptioncontainer.append(descriptiontext)

// // DESCRIPTION TEXT
// descriptiontitle.append(childSnapshot.val().item)
// descriptiontitle.append(close)
// descriptiontext.append(childSnapshot.val().description)
// descriptiontext.append("<hr>")
// descriptiontext.append(childSnapshot.val().price+ "-" + childSnapshot.val().location)

// // DATA INTO CARD
// title.append(childSnapshot.val().item);
// link.append("Contactar");
// more.append("more_vert")
// close.append("close")

// //  <div class="card col s3">
// //             <div class="card-image waves-effect waves-block waves-light">
// //               <img class="activator" src="../../IMAGES/office.jpg">
// //             </div>
// //             <div class="card-content">
// //               <span class="card-title activator grey-text text-darken-4">Televison 27" Phillips<i class="material-icons right">more_vert</i></span>
// //               <p><a href="#">Telefono</a></p>
// //             </div>
// //             <div class="card-reveal">
// //               <span class="card-title grey-text text-darken-4">Television 27" Phillips<i class="material-icons right">close</i></span>
// //               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat porro beatae dicta ex consequatur mollitia pariatur nihil excepturi libero esse omnis perferendis optio veniam cum incidunt, voluptas eaque molestias.</p>
// //               <p>$ 7,000 MXN - CDMX - Electronicos</p>
// //             </div>
// //           </div>
// //           </div>

//       // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
//       // Give your button a data attribute called data-to-do and a class called "checkbox".
//       // Lastly append the letter X inside.

//       // var toDoClose = $("<button>");

//       // toDoClose.attr("data-to-do", toDoCount);
//       // toDoClose.addClass("checkbox");
//       // toDoClose.append("✓");

//       // Append the button to the to do item
//       // toDoItem = toDoItem.prepend(toDoClose);

//       // Add the button and to do item to the to-dos div
//       $("#to-dos").append(toDoItem);
//       $("#to-dos").append(space)
//     }, function(errorObject) {
//         console.log("Errors handled: " + errorObject.code);
//     });

    
//     // 
//     // When a user clicks a check box then delete the specific content
//     // (NOTE: Pay attention to the unusual syntax here for the click event.
//     // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
//     $(document.body).on("click", ".checkbox", function() {

//       // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
//       var toDoNumber = $(this).attr("data-to-do");

//       // Select and Remove the specific <p> element that previously held the to do item number.
//       $("#item-" + toDoNumber).remove();
//     });
// });
