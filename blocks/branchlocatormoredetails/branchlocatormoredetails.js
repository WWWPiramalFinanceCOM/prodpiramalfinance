import { fetchPlaceholders, loadScript } from '../../scripts/aem.js';
import { setLocationObj } from '../moredetailsaddress/moredetailsaddress.js';

const placeholders = await fetchPlaceholders();

// const GOOGLE_MAPS_API_KEY = "AIzaSyDx1HwnCLjSSIm_gADqaYAZhSBh7hgcwTQ";
const GOOGLE_MAPS_API_KEY = placeholders.googleKey;

export default function decorate(block) {
  block.innerHTML = `<div class='map-title'>
        <h1 class='title'> Location on Map</h1>
    </div>
    <div class='map-container'></div>`;

  settingCurrentLoct(setLocationObj);
}

function myMap(lat, long) {
  const mapProp = {
    center: new google.maps.LatLng(lat, long),
    zoom: 10,
  };
  const map = new google.maps.Map(document.querySelector('.map-container'), mapProp);
  new google.maps.Marker({
    position: new google.maps.LatLng(lat, long),
    title: 'You are here',
    /* icon: {
          url: "../image/location-pin.svg",
          size: new google.maps.Size(48, 48),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(24, 42),
        }, */
    map,
  });
}

function settingCurrentLoct(setLocationObj) {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`).then((resolve) => {
    myMap(setLocationObj.lat, setLocationObj.lng);
  });
}

