function DateController(dateValue){
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById("current-time").innerHTML = dateTimeString;
    document.getElementById("selected-date-value").innerHTML= dateValue;
}

function deletecookie(){
    document.cookie = `mycookie=hello; expires=${new Date(Date.now() - 1).toUTCString()}; path=/`;
    location.reload(true);

}


// Define a function that hides the date picker container
function hideDatePickerContainer() {
    var datePickerContainer = document.querySelector(".date-picker-container");
    var selectedDateContainer = document.querySelector(".selected-date-container"); 
 
    // Define a variable to store the value of the "date" attribute
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('mycookie='))
    .split('=')[1];
    
  if (cookieValue) {
    var dateValue = cookieValue.split('; ')
      .find(row => row.startsWith('date='))
      .split('=')[1];
    //   if (dateValue) {
    //     alert("The value of the 'date' attribute is:", dateValue);
    //     } else {
    //     alert("The 'date' attribute was not found or has no value.");
    //     }
      
    if (dateValue) {
        datePickerContainer.setAttribute("hidden", "");
        selectedDateContainer.removeAttribute("hidden","");
        DateController(dateValue);
        
    }
    }
     

  }
  
  // Call  when the DOM is loaded
  document.addEventListener("DOMContentLoaded", hideDatePickerContainer);
  