function checkDetails() {

// Author : Amir Abdiukov
// Date : 24/11/2020

  //Defining the document itself
  var formsDoc = document.getElementById("DetailsForm")

  //Retrieving values from the document
  var firstName = formsDoc.first;
  var lastName = formsDoc.last;
  var email = formsDoc.email;
  var phone = formsDoc.phone;
  var info_textbox = formsDoc.info;
  var invalidCheck = formsDoc.invalidCheck;

  //creating a checker that will check whether all the values were entered correctly
  //if one of the values entered is wrong, this gets changed to false and the form does not get submitted
  var sumbittedSuccessfully = true;

  //START OF VALIDATION SECTION OF CODE

  //CHECKING THAT THE LENGTH OF THE VALUES ENTERED IS AT LEAST 0, THUS MAKING SURE USER HAS ENTERED SOMETHING
  //If it is 0, the error message pops up and the box gets highlighted in red  - setCustomValidity('Please enter ***')
  //Also if it is 0, sumbittedSuccessfully is changed to false, thus the form does not get submitted
  //If used has entered something else, the form gets validated, box gets de-highlighted - setCustomValidity('')

  switch (firstName.value.length) {
    case 0:
      firstName.setCustomValidity('Please enter a valid first name');
      sumbittedSuccessfully = false;
      break;
    default:
      firstName.setCustomValidity('');
      break;
  }

  switch (lastName.value.length) {
    case 0:
      lastName.setCustomValidity('Please enter a valid last name');
      sumbittedSuccessfully = false;
      break;
    default:
      lastName.setCustomValidity('');
      break;
  }

  switch (email.value.length) {
    case 0:
      email.setCustomValidity('Please enter a valid email');
      sumbittedSuccessfully = false;
      break;
    default:
      email.setCustomValidity('');
      break;
  }

  switch (phone.value.length) {
    case 0:
      phone.setCustomValidity('Please enter your phone number');
      sumbittedSuccessfully = false;
      break;
    default:
      phone.setCustomValidity('');
      break;
  }

  switch (info_textbox.value.length) {
    case 0:
      info_textbox.setCustomValidity('Please enter additional information');
      sumbittedSuccessfully = false;
      break;
    default:
      info_textbox.setCustomValidity('');
      break;
  }


  //END OF VALIDATION SECTION OF CODE


  //START OF THE FORM SUBMITION SECTION OF CODE

  //if the value of submittedSuccessfully is true = the form gets submitted and the user gets notified
  //if the value of submittedSuccessfully is false = the form does not get submitted
  //there is no need to add "break" after each statement, as "return true" or "return false" act as break statements
  switch (sumbittedSuccessfully) {
    case true:
      alert("Thank you for contacting us. We shall respond shortly.");
      return true;
    case false:
      return false;
  }
  //END OF THE FORM SUBMISSION SECTION OF CODE
}