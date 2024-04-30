var movies = [
    {
        id: 1,
        title: "Salaar",
        image: "movie1.jpg",
        description: "Prabhas,Prithviraj Sukumaran,Shruti Haasan,Sriya Reddy",
        tickets: 100
    },
    {
        id: 2,
        title: "LEO",
        image: "movie3.jpg",
        description: "Vijay,Trisha,Arjun,Sanjay Dutt",
        tickets: 150
    },
];
function renderMovies() {
    var movieList = document.getElementById("movieList");
    movies.forEach(function (movie) {
        var movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = "\n          <img src=\"".concat(movie.image, "\" alt=\"").concat(movie.title, "\">\n          <h2>").concat(movie.title, "</h2>\n          <p>").concat(movie.description, "</p>\n          <p>Tickets Available: ").concat(movie.tickets, "</p>\n          <button onclick=\"navigateToBookingPage(").concat(movie.id, ")\">Book Ticket</button>\n      ");
        movieList === null || movieList === void 0 ? void 0 : movieList.appendChild(movieDiv);
    });
}
function navigateToBookingPage(movieId) {
    localStorage.setItem("selectedMovieId", movieId.toString());
    window.location.href = "booking.html";
}
window.onload = renderMovies;
