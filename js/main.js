// спойлер подменю 

document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll(".menu__link-spoller");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const currentPodmenu = link.nextElementSibling;

      // Закрытие других подменю
      menuLinks.forEach(item => {
        const podmenu = item.nextElementSibling;
        if (item !== link && podmenu) {
          item.classList.remove("link-spoller_active");
          podmenu.classList.remove("podmenu_active");
          podmenu.style.height = "0";
          podmenu.style.paddingTop = "0";
        }
      });

      // Переключение активного подменю
      link.classList.toggle("link-spoller_active");
      if (currentPodmenu) {
        const isActive = currentPodmenu.classList.toggle("podmenu_active");
        currentPodmenu.style.height = isActive ? `${currentPodmenu.scrollHeight + 36}px` : "0";
        currentPodmenu.style.paddingTop = isActive ? "36px" : "0";
      }
    });
  });

  // Закрытие всех подменю при клике вне меню
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".menu__item") && !event.target.closest(".header__menu-mob")) {
      menuLinks.forEach(link => {
        const podmenu = link.nextElementSibling;
        if (podmenu) {
          link.classList.remove("link-spoller_active");
          podmenu.classList.remove("podmenu_active");
          podmenu.style.height = "0";
          podmenu.style.paddingTop = "0";
        }
      });
    }
  });
});

// скролл шапки

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"); 
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      header.classList.add("scrolled"); 
    } else if (scrollTop === 0) {
      header.classList.remove("scrolled"); 
    }

    lastScrollTop = scrollTop;
  });
});


// картинки lazy-loaded

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy-image");

  lazyImages.forEach((img) => {
    img.addEventListener("load", () => {
      img.classList.add("lazy-loaded");
    });
  });
});

//swiper

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.history__slider', {
    speed: 800,
    navigation: {
      nextEl: '.history-button-next',
      prevEl: '.history-button-prev',
    },
    breakpoints: {

      0: {
        slidesPerView: 1, 
        centeredSlides: true, 
        spaceBetween: 60, 
      },
      500: {
        slidesPerView: 1, 
        centeredSlides: true,
        spaceBetween: 60, 
      },
      776: {
        slidesPerView: 1.8,  
        centeredSlides: false,
        spaceBetween: 60, 
      },
      1080: {
        slidesPerView: 2.2,  
        centeredSlides: false, 
        spaceBetween: 60, 
      },

      1220: {
        slidesPerView: 'auto',
        spaceBetween: 112, 
        centeredSlides: false,
      }
    }
  });
});


  