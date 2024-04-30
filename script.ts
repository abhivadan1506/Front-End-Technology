interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  tickets: number;
}
const movies: Movie[] = [
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
  const movieList = document.getElementById("movieList");

  movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      movieDiv.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p>${movie.description}</p>
          <p>Tickets Available: ${movie.tickets}</p>
          <button onclick="navigateToBookingPage(${movie.id})">Book Ticket</button>
      `;
      movieList?.appendChild(movieDiv);
  });
}
function navigateToBookingPage(movieId: number) {
  localStorage.setItem("selectedMovieId", movieId.toString());
  window.location.href = "booking.html";
}
window.onload = renderMovies;
