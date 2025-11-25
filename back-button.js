const backButton = document.querySelector(".back-button");

const backButtonOnSrc = "projectsBack_On.png";
const backButtonOffSrc = "projectsBack_Off.png";

function setupButton(button) {
    if (backButton) {
        button.addEventListener("mouseenter", function(){
            const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
            hoverSound.currentTime = 0;
            hoverSound.play();
            backButton.src = backButtonOnSrc;
        });

        button.addEventListener("mouseleave", function(){
            backButton.src = backButtonOffSrc;
        });

        button.addEventListener("click", function(){
            window.location.href = "projects.html";
        });
    };
};

setupButton(backButton);