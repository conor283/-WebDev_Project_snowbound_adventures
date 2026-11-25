

// Welcome message
function welcomeMessage() {
    alert("Welcome to Snow Travel! Enjoy exploring.");
}


// Destination search
function searchDestination() {

    let search = document.getElementById("search").value.toLowerCase();

    let destinations = ["Switzerland", "France", "Austria", "Italy"];

    let results = destinations.filter(destination =>
        destination.toLowerCase().includes(search)
    );

    document.getElementById("results").innerHTML =
        results.length > 0
        ? results.join("<br>")
        : "No destinations found.";
}


// Booking form
function bookHoliday(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;
    let people = document.getElementById("people").value;

    document.getElementById("confirmation").innerHTML =
        "Thank you " + name +
        "! Your booking request for " + destination +
        " for " + people + " people has been received.";
}
