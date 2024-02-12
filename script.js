document.addEventListener('DOMContentLoaded', function () {
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto', // Set 'auto' to enable variable widths
    spaceBetween: -100,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.8, // Scale down not active slides
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: -100,
        coverflowEffect: {
          scale: 0.7 // Smaller scale for smaller viewport
        },
      },
      768: {
        spaceBetween: -100,
        coverflowEffect: {
          scale: 0.8 // Slightly larger scale for larger viewport
        },
      },
      1024: {
        spaceBetween:-100,
        coverflowEffect: {
          scale: 0.8 // Adjust as needed for the largest viewport
        },
      }
    }
  });
});



document.querySelectorAll('.image').forEach(card => {
  card.addEventListener('click', function() {
      // Add the click animation
      card.classList.add('card-clicked');
      setTimeout(() => {
          card.classList.remove('card-clicked');
          // Redirect to the new page
          window.location.href = '/index.html';
      }, 300);
  });
});
