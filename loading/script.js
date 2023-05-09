window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loading-screen').classList.add('hide');
    document.querySelector('body').classList.remove('hide');
    window.location.href = 'home.html';
  }, 2000);
});
