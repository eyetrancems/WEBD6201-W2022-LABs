// Matt Enns 100821160
// David Nguyen 100604426
// 2022-02-03

// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
"use strict";
(function(){

    // Method to change Nav Item word Products to Projects
    function ChangeProductsToProjects()
    {
        // Get array (collection) of nav-link <a>
        let NavBarLinks = document.getElementsByClassName("nav-link");
        
        // Loop through nav-link and replace what is inside <a> tags with new
        let i = 0;
        for (i = 0; i < NavBarLinks.length; i++) {
            //console.log(NavBarLinks[i].innerHTML);
            if (NavBarLinks[i].innerHTML == `<i class="fas fa-project-diagram"></i> Products`){
                NavBarLinks[i].innerHTML = `<i class="fas fa-project-diagram"></i> Projects`;
            }
        } 

        // Loop through nav-link active and replace what is inside <a> tags with new
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
        // Get array of il element
        let NavBarItems = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];

        // Create li element
        let NavItem = document.createElement("li");
        NavItem.setAttribute("class", "nav-item");
        let NavItemInnerHTML = `<a class="nav-link" href="#"><i class="fas fa-user-friends"></i> Human Resources</a>`;
        NavItem.innerHTML = NavItemInnerHTML;

        // Insert new li element before li at position 2
        NavBarItems.insertBefore(NavItem,NavBarItems.childNodes[4]);
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
        <p>On this website you will see our Projects, Services and information about us as software/web developers.</p>
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
        
        // Background body image
        let bodyElement = document.body;            
        bodyElement.setAttribute("background", "/images/backgroundfinal.jpg");

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h3>Here is our About Us page. Here is our resumes and contact information.&nbsp;</h3>
        <h3>Matt Enns</h3>
        <p><img src="./images/matthewennsclipartprofilepic.jpg" alt="Matthew Enns Profile Pic Clipart" /></p>
        <p>Resume Link: Google Doc</p>
        <p>Contact Link: <a title="Matthew Enns email at Durham College" href="mailto:matthew.enns@dcmail.ca" target="_blank">matthew.enns@dcmail.ca</a></p>
        <h3>David Nguyen</h3>
        <p><img src="./images/davidnguyenclipartprofilepic.jpg" alt="David Nguyen Profile Pic Clipart" /></p>
        <p>Resume Link: <a title="David Nguyen's Resume in a Google Doc" href="https://docs.google.com/document/d/1c5DLF8RGRX8LbDr0MFF2LPyvJGN5oruNn1yS0Txhnbk/edit?usp=sharing" target="_blank">Google Doc</a></p>
        <p>Contact Link: <a title="David Nguyen's Email at Durham College" href="mailto:david.nguyen1@dcmail.ca" target="_blank">david.nguyen1@dcmail.ca</a></p>`;

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
        
        // Background body image
        let bodyElement = document.body;            
        bodyElement.setAttribute("background", "/images/backgroundfinal.jpg");

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h3>Here is our Projects page showcasing our 4 favourite projects</h3>
        <p>Matt Enns Project 1</p>
        <p>Matt Enns Project 2</p>
        <p><a title="AMLCSL Website" href="https://www.amlcsl.com/" target="_blank">AMLCSL.com</a> - Oshawa Computer Repair and Sales store website created in WordPress</p>
        <p><img src="./images/amlcsl.jpg" alt="Snapshot of AMLCSL WordPress website" /></p>
        <p><a title="Teach English World Teaching Portal Website" href="http://www.teachenglishworld.com/" target="_blank">TeachEnglishWorld.com</a> - Teaching English Portal website created in WordPress</p>
        <p><img src="./images/tew.jpg" alt="Snapshot of Teach English World WordPress website" /></p>`;

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

        // Background body image
        let bodyElement = document.body;            
        bodyElement.setAttribute("background", "/images/backgroundfinal.jpg");

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Step 2 - create a HTML Element in memory
        let Article = document.createElement("article");
        let ArticleParagraph = `<h3>Here is our Services page. We offer the following Skills</h3>
        <h3>Custom Software Development</h3>
        <p><img src="./images/softwaredevelopmentclipart.jpg" alt="Software Development Clipart" /></p>
        <h3>Custom Website Development</h3>
        <p><img src="./images/webdevelopmentclipart.jpg" alt="Web Development Clipart" /></p>`;

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
        
        // Background body image
        let bodyElement = document.body;            
        bodyElement.setAttribute("background", "/images/backgroundfinal.jpg");

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