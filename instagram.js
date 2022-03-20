function home() {
    document.querySelector("header").style.display = "block";
    document.querySelector(".post-section").style.display = "block";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".your-profile").style.display = "none";
}

function search() {
    document.querySelector("header").style.display = "none";
    document.querySelector(".post-section").style.display = "none";
    document.querySelector(".main-search").style.display = "block";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".your-profile").style.display = "none";
}

function reels() {
    document.querySelector("header").style.display = "none";
    document.querySelector(".post-section").style.display = "none";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "block";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".your-profile").style.display = "none";
}

function likes() {
    document.querySelector("header").style.display = "none";
    document.querySelector(".post-section").style.display = "none";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "block";
    document.querySelector(".your-profile").style.display = "none";
}

function setting() {
    document.querySelector("header").style.display = "none";
    document.querySelector(".post-section").style.display = "none";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".your-profile").style.display = "block";
}

function chatbox_open() {
    document.querySelector("header").style.display = "none";
    document.querySelector(".post-section").style.display = "none";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".main-chat").style.display = "block";
}

function chatbox_close() {
    document.querySelector("header").style.display = "block";
    document.querySelector(".post-section").style.display = "block";
    document.querySelector(".main-search").style.display = "none";
    document.querySelector(".main-reels").style.display = "none";
    document.querySelector(".other-info").style.display = "none";
    document.querySelector(".main-chat").style.display = "none";
}