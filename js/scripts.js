function Ticket(release, time, age, poster) {
  this.release = release;
  this.time = time;
  this.age = age;
  this.poster = poster;
}

Ticket.prototype.findPrice = function() {
let price = 0
if (this.release === "rush" || this.release === "tenet"){
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

Ticket.prototype.findPoster = function() {
  if (this.poster === "rush") {
    imageUrl = "img/rush.jpg";
    } else if (this.poster === "tenet") {
      imageUrl = "img/tenet.jpg"; 
    } else if (this.poster === "john-wick-4") {
      imageUrl = "img/jw4.jpg";
    } else if (this.poster === "the-menu") {
      imageUrl = "img/menu.jpg";
    } return imageUrl;
  }; 


function handleFormSubmission(event) {
  event.preventDefault();
  const showtimes = document.querySelector("#showtimes").value;
  const release = document.querySelector("#movie-option").value;
  const age = document.querySelector("#age-group").value;
  const poster = document.querySelector("#movie-option").value;
  console.log(poster);
  let movieTicket = new Ticket(release, showtimes, age, poster);
  movieTicket.findPrice();
  let price = movieTicket.findPrice();
  document.getElementById("ticket-price").innerText = price;
  movieTicket.findPoster();
  document.getElementById("poster-image").setAttribute("src", imageUrl);
  document.getElementById("poster-image").setAttribute("width", "300px");
}

window.addEventListener("load", function (){
  document.querySelector("form#movie-options").addEventListener("submit", handleFormSubmission);
});
