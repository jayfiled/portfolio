$(document).ready(function() {
  
  //Use jQuery to execute a function whenever scrolling is detected in the window
  $(window).scroll(function () {
                onScrollHandle();
            });
  
  //Define what the function does
            function onScrollHandle() {
                //Switch a class when the window scrolls down 50px - the class toggles a nav bar shrink
                $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
              
                //Get current scroll position
                var currentScrollPos = $(document).scrollTop();
              
                //Iterate through all nodes in the element with id "top-nav" and for each root element do:
                $('#top-nav > ul > li > a').each(function () {
                  //set a variable that stores the element targeted by this function as an object (the 'a' element)
                    var curLink = $(this);
                  //set a variable that stores the value of the attribute 'href' from the 'a' element.
                  // this is:'#about, #portfolio, #achievements, #contact' iteratively
                  // I think this is the *target* element, so the elements below with the id the href links to.. ?
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of the current position and every section's position in each scroll
                    if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                        //Remove class active in all nav
                        $('#top-nav > ul > li > a').removeClass("active");
                        //Add class active
                        curLink.addClass("active");
                    }
                    else {
                        curLink.removeClass("active");
                    }
                });
            }
  
  
});

//hacked from trungk18's example: https://github.com/trungk18/Change-Navigation-Active-Class-on-Page-Scroll