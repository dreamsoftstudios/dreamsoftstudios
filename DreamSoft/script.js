const map = L.map("map", {
  zoomControl: false,
  attributionControl: false,
  preferCanvas: true
}).setView([20, 0], 2);

// Arka plan tile YOK — grid CSS’ten geliyor
L.tileLayer("", {}).addTo(map);

// Şehir verisi
const cities = [
  { name: "İstanbul", lat: 41.0082, lng: 28.9784, houses: 0 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917, houses: 0 }
];

cities.forEach(city => {
  const marker = L.circleMarker([city.lat, city.lng], {
    radius: 5,
    color: "white",
    weight: 1,
    fillColor: "white",
    fillOpacity: 1
  }).addTo(map);

  marker.on("click", () => {
    city.houses++;
    openCityPanel(city);
  });
});

// Şehir paneli
function openCityPanel(city) {
  alert(
    `${city.name}\n` +
    `🏠 Ev: ${city.houses}\n` +
    `🌳 Yeşil Alan: (yakında)`
  );
}
