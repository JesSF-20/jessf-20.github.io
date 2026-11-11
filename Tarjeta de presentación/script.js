/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2500);
});

/*=========================================
        CONTADORES ANIMADOS
=========================================*/

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = Number(counter.dataset.target);

  let current = 0;

  const speed = target / 80;

  const update = () => {
    current += speed;

    if (current < target) {
      counter.textContent = Math.floor(current);

      requestAnimationFrame(update);
    } else {
      counter.textContent = target + "+";
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);

        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/*=========================================
        EFECTO 3D FOTO
=========================================*/

const photoCard = document.querySelector(".photo-card");

if (photoCard) {
  photoCard.addEventListener("mousemove", (e) => {
    const rect = photoCard.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / 20) * -1;

    const rotateY = (x - rect.width / 2) / 20;

    photoCard.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)
    `;
  });

  photoCard.addEventListener("mouseleave", () => {
    photoCard.style.transform = `
    perspective(1000px)
    rotateY(-10deg)
    `;
  });
}

/*=========================================
        CURSOR PERSONALIZADO
=========================================*/

const cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";
});

const hoverElements = document.querySelectorAll(
  "a,button,.service-card,.project-card",
);

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
  ".service-card,.project-card,.testimonial-card,.section-title,.skill",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("hidden");

  revealObserver.observe(element);
});

/*=========================================
        BOTONES EFECTO MAGNETICO
=========================================*/

const buttons = document.querySelectorAll(".btn-primary,.btn-secondary");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `
translate(${x / 5}px,${y / 5}px)
`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

/*=========================================
        PARALLAX FONDO
=========================================*/

const background = document.querySelector(".background");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;

  const y = e.clientY / window.innerHeight - 0.5;

  background.style.transform = `
translate(${x * 30}px,${y * 30}px)
`;
});

/*=========================================
        MENU SCROLL
=========================================*/

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const section = document.querySelector(link.getAttribute("href"));

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
