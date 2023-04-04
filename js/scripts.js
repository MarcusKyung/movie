function Ticket(release, time, age) {
  this.release = release;
  this.time = time;
  this.age = age;

}

Ticket.prototype.findPrice = function() {
let price = 0
if (this.release === "old-movie"){
  price = price + 8;
} else {
  price = price + 10;
}

if (this.time === "day"){
  price = price * 1.5;
} 

if (this.age === "senior"){
  price = price - 2;
} else if (this.age === "child"){
  price = price -1;
} return price;

};

function handleFormSubmission(event) {
  event.preventDefault();
  const showtimes = document.querySelector("#showtimes").value;
  const release = document.querySelector("#movie-option").value;
  const age = document.querySelector("#age-group").value;
  let movieTicket = new Ticket(release, showtimes, age);
  movieTicket.findPrice();
  let price = movieTicket.findPrice();
  document.getElementById("ticket-price").innerText = price;

}

window.addEventListener("load", function (){
  document.querySelector("form#movie-options").addEventListener("submit", handleFormSubmission);
  
});
