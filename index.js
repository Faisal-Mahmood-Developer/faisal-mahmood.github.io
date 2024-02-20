

// first button
function basicFunction() {
  const contentOne = document.getElementById('textOne');
  const contentTwo = document.getElementById('textTwo');
  const contentThree = document.getElementById('textThree');
  if (contentOne.style.display === 'none') {
    contentOne.style.display = 'block';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'none';
  } else {
    contentTwo.style.display = 'none';
  }

}

// secont button 
function mySecondFunction() {
  const contentOne = document.getElementById('textOne');
  const contentTwo = document.getElementById('textTwo');
  const contentThree = document.getElementById('textThree');
  if (contentTwo.style.display === 'none') {
    contentOne.style.display = 'none';
    contentTwo.style.display = 'block';
    contentThree.style.display = 'none';
  } else {
    contentOne.style.display = 'none'
  }

}
function myThirdFunction() {
  const contentOne = document.getElementById('textOne');
  const contentTwo = document.getElementById('textTwo');
  const contentThree = document.getElementById('textThree');
  if (contentThree.style.display === 'none') {
    contentOne.style.display = 'none';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'block';
  } else {
    contentOne.style.display = 'none'
  }

}
// form one 
document.getElementById("yourFormtwo").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById('name').value;
  const lname = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const mymessage = document.getElementById('message').value;
  const myCity = document.getElementById('city').value;
  const myCourse = document.getElementById('course').value;


  Email.send({
      Host: "smtp.elasticemail.com", // Replace with your SMTP server host
      Username: "faisalmahmood3737@gmail.com", // Replace with your SMTP username
      Password: "F3D76975569FCC80EDE029CB644806596E3C", // Replace with your SMTP password
      SecureToken: "1ed00c6c-3ca4-43f9-ad2d-f372397b9f38",
      To: 'faisalmahmood3535q@gmail.com',
      From: "faisalmahmood3737@gmail.com",
      Subject: "New Contact Form Submission",
      Body: {
          html: `Name: ${name}<br>Last Name: ${lname}<br>Email: ${email}<br>Number: ${number}<br>Message: ${mymessage} <br>City: ${myCity}<br>Course: ${myCourse} `
      }
  }).then(
      function (message) {
        var myModal = new bootstrap.Modal(document.getElementById('messageModal'));
        myModal.show();
          document.getElementById("yourFormtwo").reset(); // Reset the form
      }
  );
});

function modalfunction(){
  
}


// form two 
document.getElementById("yourForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById('name').value;
  const lname = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const mymessage = document.getElementById('message').value;

  Email.send({
      Host: "smtp.elasticemail.com", // Replace with your SMTP server host
      Username: "faisalmahmood3737@gmail.com", // Replace with your SMTP username
      Password: "F3D76975569FCC80EDE029CB644806596E3C", // Replace with your SMTP password
      SecureToken: "1ed00c6c-3ca4-43f9-ad2d-f372397b9f38",
      To: 'faisalmahmood3535q@gmail.com',
      From: "faisalmahmood3737@gmail.com",
      Subject: "New Contact Form Submission",
      Body: {
          html: `Name: ${name}<br>Last Name: ${lname}<br>Email: ${email}<br>Number: ${number}<br>Message: ${mymessage}`
      }
  }).then(
      function (message) {
        var myModal = new bootstrap.Modal(document.getElementById('messageModal'));
        myModal.show();
          document.getElementById("yourForm").reset(); // Reset the form
      }
  );
});

   // Get the current year
   const currentYear = new Date().getFullYear();
   // Find the element with the id "currentYear" in the footer and set its text content
   document.getElementById("currentYear").textContent = currentYear;

// <!-- sending email functions  -->
