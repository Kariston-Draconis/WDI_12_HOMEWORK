var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

/* For every separate value in the cities array, create an option element for it, and assign it a value of the same name, then append it to the list */
var box = document.querySelector("#city-type");
for (var i = 0; i < cities.length; i++) {
  var city = document.createElement('option');
  city.innerHTML = cities[i];
  city.value = cities[i];
  box.appendChild(city);
};

box.addEventListener("change", function() {
  if (box.value === "NYC") {
    document.body.classList.add('nyc')
  } else if (box.value === "SF") {
    document.body.classList.add('sf')
  } else if (box.value === "LA") {
    document.body.classList.add('la')
  } else if (box.value === "ATX") {
    document.body.classList.add('austin')
  } else if (box.value === "SYD") {
    document.body.classList.add('sydney')
  }
})
