document.addEventListener('DOMContentLoaded', function () {
  const threeMinutes = 3 * 60 * 1000; 

  function showPopup() {
    const popup = document.getElementById('reklam-popup');
    popup.style.display = 'block';

    localStorage.setItem('popupShown', Date.now());
  }

  function closePopup() {
    const popup = document.getElementById('reklam-popup');
    popup.style.display = 'none';
  }

  function checkPopup() {
    const lastShownTime = localStorage.getItem('popupShown');
    const currentTime = Date.now();

    if (!lastShownTime || currentTime - lastShownTime >= threeMinutes) {
      showPopup();
    }
  }

  checkPopup();

  setInterval(checkPopup, threeMinutes);

  document.getElementById('close-popup').addEventListener('click', closePopup);
});
