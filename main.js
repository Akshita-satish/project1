
var firebaseConfig = {
    apiKey: "AIzaSyDx2mOrG6PgC36a-ova-Swx5guC9GJtFUo",
    authDomain: "contactform-10e8e.firebaseapp.com",
    projectId: "contactform-10e8e",
    storageBucket: "contactform-10e8e.appspot.com",
    messagingSenderId: "421120000944",
    appId: "1:421120000944:web:6b2b996b89c314dda94c75",
    measurementId: "G-VV777RNH8E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var name1 = getInputVal('name1');
  var qty = getInputVal('qty');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,name1, company, email, phone, message,qty);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,name1, company, email, phone, message,qty){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
	name1: name1,
	qty: qty,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}









$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});

function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
    $('.total').text(sum);
}














