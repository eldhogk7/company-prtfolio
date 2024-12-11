/* DESCRIPTION: CUSTOM JS FILE */
/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
    if(!(window.innerWidth < 991)){
        scrollFunction();
        scrollFunctionBTT(); // back to top button
    }
};

// function scrollFunction() {
//     let intViewportWidth = window.innerWidth;

//     if (document.body.scrollTop > 30 || (document.documentElement.scrollTop > 30 && intViewportWidth > 991)) {
//         document.getElementById("navbar").classList.add("top-nav-collapse");
//         var elements = document.querySelectorAll('.nav-link,.logo-text');
//         elements.forEach(function(element) {
//             element.style.color = "#505050";
//         });
//     } else if (document.body.scrollTop < 30 || (document.documentElement.scrollTop < 30 && intViewportWidth > 991)) {
//         document.getElementById("navbar").classList.remove("top-nav-collapse");
//         var elements = document.querySelectorAll('.nav-link,.logo-text');
//         elements.forEach(function(element) {
//             element.style.color = "white";
//         });
//     }
// }

// let di = document.querySelector(".dropdown-toggle");
// di.addEventListener("click", () => {
//     if(!(window.innerWidth > 991)){
//         di.style.color = "#000";
//     }
//     if(window.innerWidth > 991){
//         di.style.color = "#fff";
//     }
// });

// let d2 = document.querySelector("#dropdown01");
// d2.addEventListener("click", () => {
//     if(!(window.innerWidth > 991)){
//         d2.style.color = "#000";
//     }
//     if(window.innerWidth > 991){
//         d2.style.color = "#fff";
//     }
// });


// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// // NAVBAR ON MOBILE
// let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");


// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click", () => {
//         document.querySelector(".offcanvas-collapse").classList.toggle("open");
//     });
// }

// document.querySelector(".navbar-toggler").addEventListener("click", () => {
//   document.querySelector(".offcanvas-collapse").classList.toggle("open");
// });

// // HOVER ON DESKTOP
// function toggleDropdown(e) {
//     const _d = e.target.closest(".dropdown");
//     let _m = document.querySelector(".dropdown-menu", _d);
//     setTimeout(
//         function () {
//         const shouldOpen = _d.matches(":hover");
//         _m.classList.toggle("show", shouldOpen);
//         _d.classList.toggle("show", shouldOpen);

//         _d.setAttribute("aria-expanded", shouldOpen);
//         },
//         e.type === "mouseleave" ? 300 : 0
//     );
// }

// // ON HOVER
// const dropdownCheck = document.querySelector(".dropdown");

// if (dropdownCheck !== null) {
//     document
//         .querySelector(".dropdown")
//         .addEventListener("mouseleave", toggleDropdown);
//     document
//         .querySelector(".dropdown")
//         .addEventListener("mouseover", toggleDropdown);

//     // ON CLICK
//     document.querySelector(".dropdown").addEventListener("click", (e) => {
//         const _d = e.target.closest(".dropdown");
//         let _m = document.querySelector(".dropdown-menu", _d);
//         if (_d.classList.contains("show")) {
//             _m.classList.remove("show");
//             _d.classList.remove("show");
//         } else {
//             _m.classList.add("show");
//             _d.classList.add("show");
//         }
//     });
// }



/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


// 
// my-code 
// 
function iconchanger() {
    var element1 = document.getElementById('iconc');
    element1.classList.toggle('fa-bars');
    element1.classList.toggle('fa-xmark');
}

// function showHoverBanner(ulId, liId) {
//     var ulElement = document.getElementById(ulId);
//     var liElement = document.getElementById(liId);

//     var elements = document.querySelectorAll("#product-li, #randd-li, #service-li");

//     elements.forEach(function(element) {
//     element.style.borderBottom = 'none';
//     });

//     var elements_ul = document.querySelectorAll("#product-ul, #randd-ul, #service-ul");

//     elements_ul.forEach(function(elements_ul) {
//     elements_ul.style.display = 'none';
//     });
    
//     document.querySelector(".cover-div").style.display = "block";
//     if (ulElement) {
//       ulElement.style.display = 'flex';
//     }
  
//     if (liElement) {
//       liElement.style.borderBottom = '2px solid white';
//     }
//   }
  
//   function hideHoverBanner() {
//     var elements = document.querySelectorAll("#product-li, #randd-li, #service-li");

//     elements.forEach(function(element) {
//     element.style.borderBottom = 'none';
//     });

//     var elements_ul = document.querySelectorAll("#product-ul, #randd-ul, #service-ul");

//     elements_ul.forEach(function(elements_ul) {
//     elements_ul.style.display = 'none';
//     });

//     document.querySelector(".cover-div").style.display = "none";

//   }
//   document.addEventListener('mouseleave', function() {
//     // This function will be called when the mouse leaves the document (browser window)
//     hideHoverBanner();
//     hidesearchbar();
//   });

  window.onscroll = function () {
        scrollFunction1();
        // scrollFunctionBTT(); // back to top button
};
window.onload = scrollFunction1();

function scrollFunction1() {
    // let intViewportWidth = window.innerWidth;

    if (document.body.scrollTop > 30 || (document.documentElement.scrollTop > 30)) {
        document.querySelector(".my-nav").style.backgroundColor = "#000000d9";
    } else if (document.body.scrollTop < 30 || (document.documentElement.scrollTop < 30)) {
        document.querySelector(".my-nav").style.backgroundColor = "transparent";
    }
}

function onmenuclick() {
    document.querySelector('.phone-menu-open').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function onmenuclose() {
    document.querySelector('.phone-menu-open').style.display = 'none'; // Corrected typo here
    document.body.style.overflow = 'hidden';
}
function showdivsubs(menu_class){
    document.querySelector("." + menu_class).style.display = "flex";
}
function hidedivsubs(menu_close_class){
    document.querySelector("." + menu_close_class).style.display = "none";
}

function handleWindowSize() {
    if (window.innerWidth > 991) {
        document.querySelector(".my-nav").style.display = "flex";
        nav_Element = document.querySelectorAll(".nav-search-bar, .my-phone-nav, .phone-menu-open, .phone-menu-open-sub1, .phone-menu-open-sub2, .phone-menu-open-sub3");
        nav_Element.forEach(function (nav_Element) {
            nav_Element.style.display = "none";
        });
        document.body.style.overflow = "hidden";
    } else {
        document.querySelector(".my-nav").style.display = "none";
        document.querySelector(".my-phone-nav").style.display = "flex";
        nav_Element = document.querySelectorAll(".nav-search-bar, .phone-menu-open, .phone-menu-open-sub1, .phone-menu-open-sub2, .phone-menu-open-sub3");
        nav_Element.forEach(function (nav_Element) {
            nav_Element.style.display = "none";
        });
        document.body.style.overflow = "hidden";
    }
}

window.onload = handleWindowSize;
window.onresize = handleWindowSize;

function hidesearchbar(){
    console.log('hiding')
    document.querySelector(".nav-search-bar").style.display = "none";
    document.body.style.overflow = "hidden";
    if(window.innerWidth > 991){
        if (document.body.scrollTop > 30 || (document.documentElement.scrollTop > 30)) {
            document.querySelector(".my-nav").style.backgroundColor = "#000000d9";
        } else if (document.body.scrollTop < 30 || (document.documentElement.scrollTop < 30)) {
            document.querySelector(".my-nav").style.backgroundColor = "transparent";
        }
    }
}
function showsearchbar(){
    
    nav_Element = document.querySelectorAll(".nav-search-bar, .phone-menu-open, .phone-menu-open-sub1, .phone-menu-open-sub2, .phone-menu-open-sub3");
    nav_Element.forEach(function (nav_Element) {
   
        nav_Element.style.display = "none";
    });
    const navSearchBar = document.querySelector(".nav-search-bar");
    navSearchBar.classList.add('visible');
    document.body.style.overflow = "hidden";
    document.querySelector(".my-nav").style.backgroundColor= "transparent";
    // document.getElementById("search-input").focus();
}

function mySearchFunction() {
  
    
    const input = document.querySelector('.search-bar input'); // Get the input element
    const filter = input.value.toUpperCase(); // Get the input value and convert to uppercase
    const ul = document.getElementById("my-search-ul"); // Get the list
    const li = ul.getElementsByTagName("li"); // Get all list items
    let hasMatches = false; // Flag to track if there are matches

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0]; // Get the anchor tag
        const txtValue = a.textContent || a.innerText; // Get text content of the link

        // Check if the text matches the filter
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the matched item
            hasMatches = true; // Set flag to true
        } else {
            li[i].style.display = "none"; // Hide the non-matched item
        }
    }

    // Show or hide the search result message
    const searchResultMessage = document.querySelector('.search-result'); // Adjust as necessary
    if (hasMatches) {
        searchResultMessage.style.display = "flex"; // Show message if matches found
    } else {
        searchResultMessage.style.display = "none"; // Hide message if no matches found
    }
}


function contact_fill(idname) {
    // Redirect to another page with a single parameter
    var redirectUrl = "../connect/index.html?id=" + encodeURIComponent(idname)+"#mail";
    window.location.href = redirectUrl;
  }



  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const muteBtn = document.querySelector('.mute-btn');
    const playIcon = playPauseBtn.querySelector('i');
    const muteIcon = muteBtn.querySelector('i');
    const progressBar = document.querySelector('.progress-bar');
    const controls=document.getElementById('controls')

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            controls.style.opacity=0
            video.muted = true;
            muteIcon.classList.remove('bx-volume-full');
            muteIcon.classList.add('bx-volume-mute');
            playIcon.classList.remove('bx-play');
            playIcon.classList.add('bx-pause');
        } else {
            video.pause();
            playIcon.classList.remove('bx-pause');
            playIcon.classList.add('bx-play');
        }
    });

    // Clicking on video also toggles play/pause
    video.addEventListener('click', function() {
        playPauseBtn.click();
    });

    // Mute functionality
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteIcon.classList.remove('bx-volume-mute');
            muteIcon.classList.add('bx-volume-full');
        } else {
            video.muted = true;
            muteIcon.classList.remove('bx-volume-full');
            muteIcon.classList.add('bx-volume-mute');
        }
    });

    // Update progress bar
    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    // Update play/pause icon when video ends
    video.addEventListener('ended', function() {
        playIcon.classList.remove('bx-pause');
        playIcon.classList.add('bx-play');
        progressBar.style.width = '0%';
    });

    // Hide controls when video is playing
    let hideControlsTimeout;
    
    video.addEventListener('mousemove', function() {
        const controls = document.querySelector('.video-controls');
        controls.style.opacity = '1';
        
        clearTimeout(hideControlsTimeout);
        
        if (!video.paused) {
            hideControlsTimeout = setTimeout(() => {
                controls.style.opacity = '0';
            }, 2000);
        }
    });

    // Prevent controls from hiding when hovering over buttons
    playPauseBtn.addEventListener('mouseenter', function() {
        clearTimeout(hideControlsTimeout);
    });

    muteBtn.addEventListener('mouseenter', function() {
        clearTimeout(hideControlsTimeout);
    });
});