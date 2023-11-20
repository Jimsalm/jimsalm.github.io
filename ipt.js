document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("fs");
    const body = document.body;
    const header = document.querySelector("header");
    const footer2 = document.querySelector(".Footer2");
    const button = document.querySelector("button");
    const wrapper = document.querySelector('.wrapper');

    //show the loading screen
    function showLoadingScreen() {
        wrapper.style.display = 'block';
    }

    //hide the loading screen
    function hideLoadingScreen() {
        wrapper.style.display = 'none';
    }

    //dark mode toggle
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            header.classList.add("dark-mode");
            footer2.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
            footer2.classList.remove("dark-mode");
        }
    });
    
    //"About Me" button
    button.addEventListener('click', function() {
        showLoadingScreen(); 
        setTimeout(function() {
            hideLoadingScreen(); 
        }, 4000);
    });

    button.addEventListener('click', function() {
        setTimeout(function(){
            window.open('https://drive.google.com/uc?export=download&id=1KSUmlAqwm7jNjkyJfHPVrYi_sNSqPxwV','_blank');
             },1800)
    });
});
