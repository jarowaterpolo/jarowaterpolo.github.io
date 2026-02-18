//Time and Date
function updateTime() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

//Age
function updateAge() {
    const ageElement = document.getElementById("age")
    if (!ageElement) return;

    const now = new Date();
    const birthDate = new Date(2008, 2 -1, 13);

    let age = now.getFullYear() - birthDate.getFullYear();

    const monthDifference = now.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthDate.getDate())
    ){
        age--;
    }

    ageElement.textContent = age;
}

updateAge();

// Countdown to Birthday
function BirthdayCountdown() {
    const dayDifferenceElement = document.getElementById("birthdayCountdown");
    if (!dayDifferenceElement) return;

    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, 2 -1, 13);

    // If birthday already happened this year → use next year
    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, 2 -1, 13);
    }

    const diffTime = nextBirthday - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    dayDifferenceElement.textContent = daysLeft + " days till next birthday";
}

BirthdayCountdown();

// Load the sound
const clickSound = new Audio("Audio/UI-Click.ogg"); // put your audio file in the right folder
clickSound.preload = "auto";

// Select all links with class 'link'
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", () => {
        event.preventDefault(); // stop the default navigation
        
        clickSound.currentTime = 0;
        clickSound.play();

        // Wait a tiny bit before navigating so the sound can play
        const url = link.href;
        setTimeout(() => {
            window.location.href = url;
        }, 100); // 100ms is enough for a short click sound
    });
});

//Video
function setVideos(){
    //Video Audio Setter
    // Get the video element
    const trailerVideo = document.getElementById("trailer");
    if (!trailerVideo) return;

    // Set starting volume (0.0 = muted, 1.0 = full volume)
    trailerVideo.volume = 0.1; // 30% volume
}

setVideos();
