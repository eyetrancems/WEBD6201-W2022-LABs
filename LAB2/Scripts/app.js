// Matt Enns 100821160
// David Nguyen 100604426
// 2022-02-27

// User class for Register
class User {

  // getters and setters
  get FirstName() {
    return this.m_firstName;
  }

  set FirstName(first_name) {
    this.m_firstName = first_name;
  }
  get LastName() {
    return this.m_lastName;
  }

  set LastName(last_name) {
    this.m_lastName = last_name;
  }

  get EmailAddress() {
    return this.m_emailAddress;
  }

  set EmailAddress(email_address) {
    this.m_emailAddress = email_address;
  }

  get Password() {
    return this.m_password;
  }

  set Password(password) {
    this.m_password = password;
  }

  // constructor
  constructor(firstName = "", lastName = "", emailAddress = "", password = "") {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.EmailAddress = emailAddress;
    this.Password = password;
  }

  // public utility methods
  serialize() {
    if (
      this.FirstName !== "" &&
      this.LastName !== "" &&
      this.EmailAddress !== "" &&
      this.Password !== ""
    ) {
      return `${this.FirstName},${this.LastName},${this.EmailAddress},${this.Password}`;
    }
    console.error(
      "One or more properties of the User Object are missing or invalid"
    );
    return null;
  }

  deserialize(
    data // assume that data is in a comma-separated format (string array of properties)
  ) {
    let propertyArray = data.split(",");
    this.FirstName = propertyArray[0];
    this.LastName = propertyArray[1];
    this.EmailAddress = propertyArray[2];
    this.Password = propertyArray[3];
  }

  // overridden methods
  toString() {
    return `First Name: ${this.FirstName} \nLast Name: ${this.LastName} \nEmail Address: ${this.EmailAddress} \nPassword: ${this.Password} `;
  }
}

// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
("use strict");
(function () {
  /**
   * This function user AJAX open a connection to the url and return data to the callback function
   * @param {string} method
   * @param {sting} url
   * @param {Function} callback
   */
  function AjaxRequest(method, url, callback) {
    
    // step 1 - create a new XHR object
    let XHR = new XMLHttpRequest();

    // step 2 - create an event
    XHR.addEventListener("readystatechange", () => {
      if (XHR.readyState === 4 && XHR.status === 200) {
        callback(XHR.responseText);
      }
    });

    // step 3 - open a request
    XHR.open(method, url);

    // step 4 - send the request
    XHR.send();
  }

  /**
   * This function load the NavBar from the header file and injects the header and underlying html into the page
   *
   * @param {*} data
   */
  function LoadHeader(data) {
    $("header").html(data);

    $(`li>a:contains(${document.title})`).addClass("active");

    CheckLogin();
  }
    /**
     * Home page functions
     */
  function DisplayHome() {
    console.log("Home Page");
    
    // Return element and attaches a click event to it to about.html
    document.querySelector("#AboutUsButton").addEventListener("click", () => {
      location.href = "about.html";
    });

    $("main").append(
      `<p id="MainParagraph" class"mt-3">This is the Main Paragraph.</p>`
    );

    $("body").append(
      `<article class="container"><p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`
    );
 
  }

      /**
     * About page functions
     */
  function DisplayAboutPage() {
    console.log("About Us");
  }

      /**
     * Projects page functions
     */
  function DisplayProjectsPage() {
    console.log("Our Projects Page");
  }

      /**
     * Services page functions
     */
  function DisplayServicesPage() {
    console.log("Our Services Page");
  }

  
  /**
   * This method replaces three validations for fullName, contactNumber and emailAddress
   *
   * @param {string} input_field_ID
   * @param {RegExp} regular_expression
   * @param {string} error_message
   */
  function ValidateField(input_field_ID, regular_expression, error_message) {

    // Hide messageArea
    let messageArea = $("#messageArea").hide();

    // lose focus and validate field
    $("#" + input_field_ID).on("blur", function () {
      let inputFieldText = $(this).val();

      if (!regular_expression.test(inputFieldText)) {
        
        // trigger the focus and select
        $(this).trigger("focus").trigger("select"); 

        // Show messageArea
        messageArea.show().addClass("alert alert-danger").text(error_message);

      } else {

        // Hide messageArea
        messageArea.removeAttr("class").hide();
      }
    });
  }

  /**
   * Contact form validation
   */
  function ContactFormValidation() {

    // fullName validation
    ValidateField(
      "fullName",
      /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/,
      "Please enter a valid Full Name."
    );

    // contactNumber validation
    ValidateField(
      "contactNumber",
      /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/,
      "Please enter a valid contact number."
    );

    // emailAddress validation
    ValidateField(
      "emailAddress",
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
      "Please enter a valid email address."
    );
  }
  /**
   * Contact list visibility
   */
  function DisplayContactListButton()
  {
    // Show Contact List button when there is a user session
    if (sessionStorage.getItem("user")) {
      document.getElementById("clbutton").style.visibility = "visible";
    } else {
      document.getElementById("clbutton").style.visibility = "hidden";
    }
  }

  /**
   *  Contact page functions
   */
  function DisplayContactPage() {
    console.log("Contact Us Page");

    // Disable visibility to button if not logged in
    DisplayContactListButton();

    // Contact fields validation
    ContactFormValidation();

    // Get elements
    let sendButton = document.getElementById("sendButton");
    let subscribeCheckbox = document.getElementById("subscribeCheckbox");    

    // add event listener to create contact object from contact form fields
    sendButton.addEventListener("click", function () {
      // Create contact object if subscribe checkbox is checked
      if (subscribeCheckbox.checked) {

        // Create contact object
        AddContact(fullName.value, contactNumber.value, emailAddress.value);
     
      }
    });
  }

  /**
   * Adds a Contact Object to localStorage
   *
   * @param {string} fullName
   * @param {string} contactNumber
   * @param {string} emailAddress
   */
  function AddContact(fullName, contactNumber, emailAddress) {
    let contact = new core.Contact(fullName, contactNumber, emailAddress);
    if (contact.serialize()) {
      let key = contact.FullName.substring(0, 1) + Date.now();

      localStorage.setItem(key, contact.serialize());
    }
  }

  /**
   * Creates a User Object and toString to console
   * 
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} emailAddress 
   * @param {string} password 
   */
  function AddUser(firstName, lastName, emailAddress, password) {
    // Create User object
    let user = new User(firstName, lastName, emailAddress, password);
    if (user.serialize()) {
      // console user toString
      console.log(user.toString());
      //let key = user.FirstName.substring(0,1) + Date.now();

      //localStorage.setItem(key, user.serialize());
    }
  }
  

 /**
   *  Contact List page functions
   */
  function DisplayContactListPage() {    
    console.log("Contact-List Page");

    if (localStorage.length > 0) {
      let contactList = document.getElementById("contactList");

      let data = ""; // data container -> add deserialized data from localStorage

      let keys = Object.keys(localStorage); // return a string array of keys

      let index = 1; // counts how many keys

      // for every key in the keys array (collection), loop
      for (const key of keys) {
        let contactData = localStorage.getItem(key); // get localStorage data value related to the key

        let contact = new core.Contact(); // create a new empty contact object
        contact.deserialize(contactData);

        data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

        index++;
      }
      contactList.innerHTML = data;

      // Go to add from add button
      $("#addButton").on("click", () => {
        location.href = "edit.html#add";
      });

      // Delete item
      $("button.delete").on("click", function () {
        if (confirm("Are you sure?")) {
          localStorage.removeItem($(this).val());
        }
        // refresh after deleting
        location.href = "contact-list.html";
      });

      // edit button
      $("button.edit").on("click", function () {
        location.href = "edit.html#" + $(this).val();
      });
    }
  }

 /**
   *  Edit page functions
   */
  function DisplayEditPage() {
    console.log("Edit Page");

    // Contact validation
    ContactFormValidation();

    let page = location.hash.substring(1);

    switch (page) {
      case "add":
        {
          $("main>h1").text("Add Contact");

          $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

          $("#editButton").on("click", (event) => {
            event.preventDefault();
            AddContact(fullName.value, contactNumber.value, emailAddress.value);

            location.href = "contact-list.html";
          });

          // gather form info (name, contact number, email address)

          $("#cancelButton").on("click", () => {
            location.href = "contact-list.html";
          });
        }
        break;
      default:
        {
          //get the contact infor from localStorage

          let contact = new core.Contact();
          contact.deserialize(localStorage.getItem(page));

          // display the contact info in the edit form
          $("#fullName").val(contact.FullName);
          $("#contactNumber").val(contact.ContactNumber);
          $("#emailAddress").val(contact.EmailAddress);

          // when editButton is pressed - update the contact

          $("#editButton").on("click", (event) => {
            event.preventDefault();

            // get any changes from the form
            contact.FullName = $("#fullName").val();
            contact.ContactNumber = $("#contactNumber").val();
            contact.EmailAddress = $("#emailAddress").val();

            // replace the item in localStorage

            localStorage.setItem(page, contact.serialize());

            //return tto the contact list

            location.href = "contact-list.html";
          });

          $("#cancelButton").on("click", () => {
            location.href = "contact-list.html";
          });
        }
        break;
    }
  }

   /**
   *  Login page functions
   */
  function DisplayLoginPage() {
    console.log("Login Page");

    // messageArea hide
    let messageArea = $("#messageArea");
    messageArea.hide();

    $("#loginButton").on("click", function () {
      let success = false;

      // create an empty user object
      let newUser = new core.User();

      // use jQuery shortcut to lod the users.json file
      $.get("./Data/users.json", function (data) {

         // for every user in the users.json file, loop
        for (const user of data.users) {
          // check if the username and password entered matches the user data
          if (
            username.value == user.Username &&
            password.value == user.Password
          ) {
            // get the user data from the file and assign it to our empty user object
            newUser.fromJSON(user);
            success = true;
            break;
          }
        }
        // if username and password matches..success! -> perform the login sequence
        if (success) {
          // add user to session storage
          sessionStorage.setItem("user", newUser.serialize());
           // hide any error message
          messageArea.removeAttr("class").hide();
          // redirect the user to the secure area of the site - contact-list.html
          location.href = "contact-list.html";
        } else {
          // display an error message
          $("#username").trigger("focus").trigger("select");
          messageArea
            .addClass("alert alerg-danger")
            .text("Error: Invalid Login Credentials")
            .show();
        }
      });
    });

    $("#cancelButton").on("click", function () {
      // clear the login form
      //document.form[0].reset();

      sessionStorage.clear();

      // return to the home page
      location.href = "index.html";
    });
  }
/**
 * Check Login function uf user is loggedin and add user to navbar
 */
  function CheckLogin() {

    // if user is logged in, then... 
    if (sessionStorage.getItem("user")) {

      // Insert Username in navbar
      let NavBarItems = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
      let NavItem = document.createElement("li");
      NavItem.setAttribute("class", "nav-item");
      let NavItemInnerHTML = `<a class="nav-link" href="#"><i class="fas fa-user-friends"></i> ${sessionStorage.getItem("user").split(",")[2]}</a>`;
      NavItem.innerHTML = NavItemInnerHTML;
      NavBarItems.insertBefore(NavItem, NavBarItems.childNodes[10]);

      // swap out the login link for logout
      $("#login").html(
        `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-in-alt"></i> Logout</a>`
      );
      
      // logout clear sessionStorage and redirect to login.html
      $("#logout").on("click", function () {
        sessionStorage.clear();

        location.href = "login.html";
      });
    } 
  }

  /**
   * Compare password to equal or not and show error
   * 
   * @param {string} input_field_ID1 
   * @param {string} input_field_ID2 
   * @param {string} error_message 
   */
  function ComparePasswords(input_field_ID1, input_field_ID2, error_message) {
    // Hide messageArea
    let messageArea = $("#messageArea").hide();

    // on blur password field 2 and run comparison 
    $("#" + input_field_ID2).on("blur", function () {
      let inputFieldText1 = $("#" + input_field_ID1).val();
      let inputFieldText2 = $("#" + input_field_ID2).val();      
      if (inputFieldText1 != inputFieldText2) {
        //$(this).trigger("focus").trigger("select"); // trigger the focus and select
        // Empty both password fields
        $("#" + input_field_ID1).val('');
        $("#" + input_field_ID2).val('');
        // Show error
        messageArea.show().addClass("alert alert-danger").text(error_message);


      } else {
        // hide messageArea
        messageArea.removeAttr("class").hide();
      }
    });
  }

  /**
   *  Register Validation form
   */
  function RegisterValidation() {

    // firstName validation
    ValidateField(
      "firstName",
      /^([A-Z][a-z]{1,})$/,
      "Please enter a valid First Name."
    );

    // lastName validation
    ValidateField(
      "lastName",
      /^([A-Z][a-z]{1,})$/,
      "Please enter a valid Last Name."
    );

    // emailAddress validation
    ValidateField(
      "emailAddress",
      /^(([a-zA-Z0-9._-]{8,})+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10})$/,
      "Please enter a valid email address."
    );

    // password validation
    ValidateField(
      "password",
      /^([a-zA-Z0-9._-]{6,})$/,
      "Please enter a valid Password."
    );

    if (document.getElementById("messageArea"))
    {
      // set div element id to ErrorMessage
      document.getElementById("messageArea").id = "ErrorMessage";
    }

    // compare password to see matching
    ComparePasswords("password", "confirmPassword", "Passwords do not match.");
  }

  /**
   * Register page functions
   */
  function DisplayRegisterPage() {
    console.log("Register Page");

    // Register validation
    RegisterValidation();

    //Add event listener to submitbutton
    submitButton.addEventListener("click", function () {
      // prevent default form function
      event.preventDefault();
      // Add User object from fields
      AddUser(
        firstName.value,
        lastName.value,
        emailAddress.value,
        password.value
      );

      //location.href = "/register.html";

      // reset form
      document.getElementById("registerForm").reset();
    });
  }

  // named function
  function Start() {
    console.log("App Started!!");

    AjaxRequest("GET", "header.html", LoadHeader);

    switch (document.title) {
      case "Home":
        DisplayHome();
        break;
      case "About Us":
        DisplayAboutPage();
        break;
      case "Our Projects":
        DisplayProjectsPage();
        break;
      case "Our Services":
        DisplayServicesPage();
        break;
      case "Our Contact-List":
        DisplayContactListPage();
        break;
      case "Our Contact Us":
        DisplayContactPage();
        break;
      case "Edit":
        DisplayEditPage();
        break;
      case "Login":
        DisplayLoginPage();
        break;
      case "Register":
        DisplayRegisterPage();
        break;
    }
  }

  window.addEventListener("load", Start);
})();
