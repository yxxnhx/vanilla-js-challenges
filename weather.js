function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
}
function onGeoError() {
  alert("Cant find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
