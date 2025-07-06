const sliders = document.querySelectorAll('.slider1'); // ganti sesuai class container slider utama

sliders.forEach(slider => {
  const slidesContainer = slider.querySelector('.slides');
  const slideImages = slider.querySelectorAll('.slide');
  const nextBtn = slider.querySelector('.next');
  const prevBtn = slider.querySelector('.prev');

  let currentIndex = 0;

  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideImages.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
    updateSlide();
  });

  // Inisialisasi tampilan slide pertama
  updateSlide();
});


// Modal tetap bisa dipakai sama semua gambar klikable di semua slider
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const images = document.querySelectorAll(".clickable-image");
const close = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

close.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


  const category = document.body.getAttribute('data-category'); // misal: 'iso-drawing'
  const sectionContainer = document.querySelector('.drawing-section');

  fetch('portfolio-data.json')
    .then(res => res.json())
    .then(data => {
      const sectionData = data[category];
      if (!sectionData) return;

      sectionData.forEach(item => {
        const div = document.createElement('div');
        div.className = "slider-container";

        const images = item.images.map(src => `
          <img src="${src}" class="clickable-image slide" loading="lazy"/>
        `).join('');

        div.innerHTML = `
          <h3>${item.title}</h3>
          <div class="slider1">
            <button class="prev">&#10094;</button>
            <div class="slides-wrapper">
              <div class="slides">
                ${images}
              </div>
            </div>
            <button class="next">&#10095;</button>
          </div>
          <p class="desc">${item.description}</p>
        `;

        sectionContainer.appendChild(div);
      });

      initializeSliders();
      initializeModals();
    });

function initializeSliders() {
  const sliders = document.querySelectorAll('.slider1');

  sliders.forEach(slider => {
    const slidesContainer = slider.querySelector('.slides');
    const slideImages = slider.querySelectorAll('.slide');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    let currentIndex = 0;

    function updateSlide() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideImages.length;
      updateSlide();
    });

    prevBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
      updateSlide();
    });

    updateSlide();
  });
}

function initializeModals() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const close = document.querySelector(".close");

  document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  close.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}
