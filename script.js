function showDetails(title, image, description) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-img').src = image;
  document.getElementById('popup-desc').innerText = description;

  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
