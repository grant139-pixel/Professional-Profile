// Put your email address between the quotes to receive messages.
const myEmail = "";

const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#contact-status");

form.addEventListener("submit", function (event) {
    // Stop the form from reloading the page.
    event.preventDefault();

    if (myEmail === "grantsamson139@gmail.com") {
        statusMessage.textContent =
            "Add your email address to contact.js before using this form.";
        return;
    }

    const name = document.querySelector("#sender-name").value;
    const senderEmail = document.querySelector("#sender-email").value;
    const message = document.querySelector("#sender-message").value;
    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(
        "From: " + name + "\nReply to: " + senderEmail + "\n\n" + message
    );

    // Open a new email draft. The visitor sends it from their email app.
    window.location.href =
        "mailto:" + myEmail + "?subject=" + subject + "&body=" + body;
});
