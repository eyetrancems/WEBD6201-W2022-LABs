// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
"use strict";
(function(){

    // Method to change Nav Item word Products to Projects
    function ChangeProductsToProjects()
    {
        // Get array (collection) of nav-link <a>
        let NavBarLinks = document.getElementsByClassName("nav-link");
        
        // Loop though nav-link and replace what is inside <a> tags with new
        let i = 0;
        for (i = 0; i < NavBarLinks.length; i++) {
            //console.log(NavBarLinks[i].innerHTML);
            if (NavBarLinks[i].innerHTML == `<i class="fas fa-project-diagram"></i> Products`){
                NavBarLinks[i].innerHTML = `<i class="fas fa-project-diagram"></i> Projects`;
            }
        } 

        // Loop though nav-link active and replace what is inside <a> tags with new
        let NavBarLinksActive = document.getElementsByClassName("nav-link active");
        i = 0;
        for (i = 0; i < NavBarLinksActive.length; i++) {
            //console.log(NavBarLinksActive[i].innerHTML);
            if (NavBarLinksActive[i].innerHTML == `<i class="fas fa-project-diagram"></i> Products`){
                NavBarLinksActive[i].innerHTML = `<i class="fas fa-project-diagram"></i> Projects`;
            }
        }        
    }
    
    // Method to add Nav Item 'Human Resources' between
    function InsertHRNavBarItem()
    {        
        // Get array of ul element
        let NavBarItems = document.getElementById("unorderListNav");

        // Create li element
        let NavItem = document.createElement("li");
        NavItem.setAttribute("class", "nav-item");
        let NavItemInnerHTML = `<a class="nav-link" href="#"><i class="fas fa-user-friends"></i> Human Resources</a>`;
        NavItem.innerHTML = NavItemInnerHTML;
     
        // Get array of li elements from ul
        let listItems = NavBarItems.getElementsByTagName('li');

        // Insert new li element before li at position 2
        NavBarItems.insertBefore(NavItem,listItems[2]);     
    }

    // Method to run function when on Home page
    function DisplayHome()
    {
        // console output home page
        console.log("Home Page");
        
        // Insert HR nav bar item
        InsertHRNavBarItem();
        
        // Change nav bar item
        ChangeProductsToProjects();


        // Background body image
        let bodyElement = document.body;            
        bodyElement.setAttribute("background", "/images/backgroundfinal.jpg");

        
        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h1 style="text-align: center;"><span style="color: #800000;">Welcome to </span></h1>
        <h2 style="text-align: center;"><span style="color: #0000ff;">Matt Enns </span></h2>
        <h2 style="text-align: center;">and</h2>
        <h2 style="text-align: center;"><span style="color: #008000;">David Nguyen </span></h2>
        <h2 style="text-align: center;">Website!</h2>
        <p>On this website you will see our Projects, Services and information about us as web developers.</p>
        <p>This website is created for course <a title="DC WEBD6201 course page" href="https://durhamcollege.ca/programs-and-courses/courses?subj_code_in=WEBD&amp;crse_numb_in=6201&amp;semester_in=SEM4" target="_blank">WEBD 6201</a> in Winter 2022 for Prof. Tom Tsiliopoulos.</p>`;

        // Step 3 - configure new element       
        Article.setAttribute("class", "container");

        // Step 4 - perform insertion
        Article.innerHTML = ArticleParagraph;
        MainContent.appendChild(Article);
    }

    function DisplayAboutPage()
    {
        // console output about us page
        console.log("About Us");

        // Insert HR nav bar item
        InsertHRNavBarItem();
        
        // Change nav bar item
        ChangeProductsToProjects();

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h1 style="text-align: center;"><span style="color: #800000;">Welcome to </span></h1>
        <h2 style="text-align: center;"><span style="color: #0000ff;">Matt Enns </span></h2>
        <h2 style="text-align: center;">and</h2>
        <h2 style="text-align: center;"><span style="color: #008000;">David Nguyen </span></h2>
        <h2 style="text-align: center;">Website!</h2>
        <p>On this website you will see our Projects, Services and information about us as web developers.</p>
        <p>This website is created for course <a title="DC WEBD6201 course page" href="https://durhamcollege.ca/programs-and-courses/courses?subj_code_in=WEBD&amp;crse_numb_in=6201&amp;semester_in=SEM4" target="_blank">WEBD 6201</a> in Winter 2022 for Prof. Tom Tsiliopoulos.</p>`;

        // Step 3 - configure new element       
        Article.setAttribute("class", "container");

        // Step 4 - perform insertion
        Article.innerHTML = ArticleParagraph;
        MainContent.appendChild(Article);
    }

    function DisplayProjectsPage()
    {
        // console output our projects page
        console.log("Our Projects Page");

        // Insert HR nav bar item
        InsertHRNavBarItem();
        
        // Change nav bar item
        ChangeProductsToProjects();

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h1 style="text-align: center;"><span style="color: #800000;">Welcome to </span></h1>
        <h2 style="text-align: center;"><span style="color: #0000ff;">Matt Enns </span></h2>
        <h2 style="text-align: center;">and</h2>
        <h2 style="text-align: center;"><span style="color: #008000;">David Nguyen </span></h2>
        <h2 style="text-align: center;">Website!</h2>
        <p>On this website you will see our Projects, Services and information about us as web developers.</p>
        <p>This website is created for course <a title="DC WEBD6201 course page" href="https://durhamcollege.ca/programs-and-courses/courses?subj_code_in=WEBD&amp;crse_numb_in=6201&amp;semester_in=SEM4" target="_blank">WEBD 6201</a> in Winter 2022 for Prof. Tom Tsiliopoulos.</p>`;

        // Step 3 - configure new element       
        Article.setAttribute("class", "container");

        // Step 4 - perform insertion
        Article.innerHTML = ArticleParagraph;
        MainContent.appendChild(Article);
    }

    function DisplayServicesPage()
    {
         // console output our services page
        console.log("Our Services Page");
        
        // Insert HR nav bar item
        InsertHRNavBarItem();
        
        // Change nav bar item
        ChangeProductsToProjects();

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h1 style="text-align: center;"><span style="color: #800000;">Welcome to </span></h1>
        <h2 style="text-align: center;"><span style="color: #0000ff;">Matt Enns </span></h2>
        <h2 style="text-align: center;">and</h2>
        <h2 style="text-align: center;"><span style="color: #008000;">David Nguyen </span></h2>
        <h2 style="text-align: center;">Website!</h2>
        <p>On this website you will see our Projects, Services and information about us as web developers.</p>
        <p>This website is created for course <a title="DC WEBD6201 course page" href="https://durhamcollege.ca/programs-and-courses/courses?subj_code_in=WEBD&amp;crse_numb_in=6201&amp;semester_in=SEM4" target="_blank">WEBD 6201</a> in Winter 2022 for Prof. Tom Tsiliopoulos.</p>`;

        // Step 3 - configure new element       
        Article.setAttribute("class", "container");

        // Step 4 - perform insertion
        Article.innerHTML = ArticleParagraph;
        MainContent.appendChild(Article);
    }

    function DisplayContactPage()
    {
        // console output contact us page
        console.log("Contact Us Page");
        // Insert HR nav bar item
        InsertHRNavBarItem();
        
        // Change nav bar item
        ChangeProductsToProjects();

        // get sendButton element button
        let sendButton = document.getElementById("sendButton");
        
        // click function to sendButton button 
        sendButton.addEventListener("click", function(event)
        {
            // Prevent Default to keep contact form data from refreshing/disappearing
            event.preventDefault();
            
            // Create a new contact object
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
            
            // Console write contact object
            console.log(contact.toString());
                
            // Redirect to home page index.html after 3 seconds
            let foo = setInterval(function(){
                document.location.href = 'index.html';
            },3000)            
        });
    }
   
    // Method start to run a function depending on page
    function Start()
    {
        // Console write start function app started
        console.log("App Started!!")

        // Run appropiate function depending on page title
        switch(document.title)
        {
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
            case "Our Contact Us":
                DisplayContactPage();
                break;
        }                     
    }
    
    // Start function when page loads
    window.addEventListener("load", Start);

})();