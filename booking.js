window.onload = function () {
    var bookingForm = document.getElementById("bookingForm");
    bookingForm === null || bookingForm === void 0 ? void 0 : bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var selectedMovieId = localStorage.getItem("selectedMovieId");
        if (selectedMovieId && name && email && phone && age && gender) {
            var bookingOutput = document.getElementById("bookingOutput");
            bookingOutput.innerHTML = "\n                <p>Name: ".concat(name, "</p>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone Number: ").concat(phone, "</p>\n                <p>Age: ").concat(age, "</p>\n                <p>Gender: ").concat(gender, "</p>\n            ");
            bookingOutput.style.display = "block";
            localStorage.removeItem("selectedMovieId");
            bookingOutput.scrollIntoView({ behavior: 'smooth' });
            setTimeout(function () {
                window.location.href = "index.html";
            }, 8000);
        }
        else {
            alert("Please fill in all fields.");
        }
    });
};
