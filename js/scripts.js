function Ticket(time) {
  this.time = time;
}

Ticket.prototype.findPrice = function() {
let price = 0
if (this.time === "matinee"){
  price = price + 8;
} else {
  price = price + 10;
} return price;
};

function handleFormSubmission(event) {
  event.preventDefault();
  const showtimes = document.querySelector("#showtimes").value;
  let movieTicket = new Ticket(showtimes);
  movieTicket.findPrice();
  let price = movieTicket.findPrice();
  document.getElementById("ticket-price").innerText = price;

}

window.addEventListener("load", function (){
  document.querySelector("form#movie-options").addEventListener("submit", handleFormSubmission);
  
});
