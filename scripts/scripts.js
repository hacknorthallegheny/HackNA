/*
Name: Akshath Jain
Date: 8/27/17
Purpose: JS file for HackNA sites; controls dynamic functionality
*/

$(document).ready(function(){
    var menuClicked = false;
	checkPosition(menuClicked); //check the page position on init

	//function to constantly check the scroll position
	$(document).scroll(function(){
		checkPosition(menuClicked);
	});

    //function to check to see if hamburger menu button clicked
    document.getElementById("navbarCollapseButton").addEventListener("click", function(){
        menuClicked = !menuClicked;
        checkPosition(menuClicked);
    });

	//function that checks the page position and edits how the navbar looks based on where the user has scrolled
	function checkPosition(menuStatus){
		var position = $(this).scrollTop();
		if(position == 0){
            //deal with navbar
            if(!menuStatus){
                $(".navbar").removeClass("navbarStateWhenScrolled");
            }else{
                $(".navbar").addClass("navbarStateWhenScrolled");
            }

            /*//deal with homescreen shading
            $("#home").removeClass("bgHomeStateWhenScrolled");*/

            //deal with lighting on mouseover
            /*document.onmousemove = function(e){
                //console.log("mouse location: ", e.clientX, e.clientY);
                var mouseX = e.clientX;
                var mouseY = e.clientY;
            }*/

        }else{
            //deal with navbar
            $(".navbar").addClass("navbarStateWhenScrolled");

            /*//deal with homescreen shading
            $("#home").addClass("bgHomeStateWhenScrolled");*/

            //remove lighting on mouseover
            /*document.onmousemove = null;*/
        }

        //deal with logo size 
        if(!menuStatus) //hamburger menu isn't open
            $("#logo-image").removeClass("logo-small"); //make logo small
        else
            $("#logo-image").addClass("logo-small"); //make logo big

    }

	// Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});
