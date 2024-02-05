window.addEventListener('scroll', function () {
    var nav = document.getElementById('mainNav');
    if (window.scrollY > 0) {
      nav.style.backgroundColor = 'black'; // Change background color on scroll
    } else {
      nav.style.backgroundColor = 'pink';
    }
  });