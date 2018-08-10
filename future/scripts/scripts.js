/*
Name: Akshath Jain
Date: 8/27/17
Purpose: JS file for HackNA sites; controls dynamic functionality
*/

$(document).ready(function(){
    var menuClicked = false;
	checkPosition(menuClicked); //check the page position on init

    initCountdown(); //initialize clock

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

        }else{
            //deal with navbar
            $(".navbar").addClass("navbarStateWhenScrolled");
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
        if (this.hash !== "" && !this.hash.includes("tab")) {
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

    //initialize the countdown clock
    function initCountdown(){
        var deadline = "2019-01-05T03:14:15.927-05:00" //september 1, 2018 at 3:14:15.927 am est

        //update clock every second
        setInterval(function(){
            var millis = Date.parse(deadline) - Date.now();
            var seconds = Math.floor((millis / 1000) % 60);
            var min = Math.floor((millis / 1000 / 60)% 60);
            var hours = Math.floor((millis / 1000 / 60 / 60) % 24);
            var days = Math.floor((millis / 1000 / 60 / 60 / 24));

            document.getElementById("countdown-days").innerHTML = (days < 10 ? "0" + days : days);
            document.getElementById("countdown-hours").innerHTML = (hours < 10 ? "0" + hours : hours);
            document.getElementById("countdown-minutes").innerHTML = (min < 10 ? "0" + min : min);
            document.getElementById("countdown-seconds").innerHTML = (seconds < 10 ? "0" + seconds : seconds);
        }, 500);

    }
});
