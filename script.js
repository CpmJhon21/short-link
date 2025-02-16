document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
  });

  document.getElementById('about-button').addEventListener('click', function() {
    closeAllSubmenus();
    document.getElementById('about-menu').classList.toggle('hidden');
  });

  document.getElementById('contact-button').addEventListener('click', function() {
    closeAllSubmenus();
    document.getElementById('contact-menu').classList.toggle('hidden');
  });

  function closeAllSubmenus() {
    var submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
      submenu.classList.add('hidden');
    });
  }

  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('splash-screen').classList.add('hidden');
      document.getElementById('background-music').play();
    }, 3000); // Adjust the timeout as needed
  });