function generateTicket() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const gitHub = document.getElementById("Github");
    // const ticket = document.getElementById("ticket");
    const ticketName = document.getElementById("ticket-name");
    const ticketId = document.getElementById("side-digit");
    const ticketGitHub = document.getElementById("ticket-git-hub");

    // When the form is submitted
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the page from refreshing

        const name = nameInput.value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        // Show the name
        ticketName.textContent = name;

        // Create a random ticket ID
        const randomId = "TICKET-" + Math.floor(100000 + Math.random() * 900000);

        // Show the ticket ID
        ticketId.textContent = randomId;

        ticketGitHub.textContent = gitHub.value;
        // Show the GitHub link	

        gitHub.value = '';
        nameInput.value = "";
    });
}
// Show the ticket section
//   ticket.style.display = "block";
// Call the function to set everything up
generateTicket();
