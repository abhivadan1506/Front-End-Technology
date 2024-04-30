document.addEventListener("DOMContentLoaded", function() {
  const bookBtns = document.querySelectorAll(".book-btn");
  const closeModalBtn = document.querySelector(".close");
  const confirmBookingBtn = document.querySelector("#check");

  const bookingModal = document.getElementById("bookingModal");
  const modalMovie = document.getElementById("modal-movie") as HTMLSpanElement;
  const dateSelect = document.getElementById("dateSelect") as HTMLInputElement;
  const timeSelect = document.getElementById("timeSelect") as HTMLInputElement;
  const ticketCount = document.getElementById("ticketCount") as HTMLInputElement;

  if (bookBtns) {
    bookBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        const movie = btn.getAttribute("data-movie");
        if (movie) {
          modalMovie.textContent = movie;
          if (bookingModal) {
            bookingModal.style.display = "block";
          }
        }
      });
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      if (bookingModal) {
        bookingModal.style.display = "none";
      }
    });
  }

  if (confirmBookingBtn) {
    confirmBookingBtn.addEventListener("click", function() {
      const selectedDate = dateSelect.value;
      const selectedTime = timeSelect.value;
      const numberOfTickets = ticketCount.value;

      if(selectedDate === "" || selectedTime === "" || numberOfTickets === ""){
        alert("Please fill in all fields.");
        return;
      }

      // Here you can perform AJAX request to your backend to process the booking
      // For now, let's assume the booking is successful and show an alert
      alert("Booking Successful!");
    });
  }
});
