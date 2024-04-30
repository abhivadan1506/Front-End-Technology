window.onload = function() {
    const bookingForm = document.getElementById("bookingForm") as HTMLFormElement;
    bookingForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const age = (document.getElementById("age") as HTMLInputElement).value;
        const gender = (document.getElementById("gender") as HTMLSelectElement).value;
        const selectedMovieId = localStorage.getItem("selectedMovieId");
        if (selectedMovieId && name && email && phone && age && gender) {
            const bookingOutput = document.getElementById("bookingOutput")!;
            bookingOutput.innerHTML = `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>Age: ${age}</p>
                <p>Gender: ${gender}</p>
            `;
            bookingOutput.style.display = "block";
            localStorage.removeItem("selectedMovieId");
            bookingOutput.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                window.location.href = "index.html";
            }, 8000);
        } else {
            alert("Please fill in all fields.");
        }
    });
}
