function setCookie(t, e, o) {
  let n = "";
  if (o) {
    const t = new Date();
    t.setTime(t.getTime() + 24 * o * 60 * 60 * 1e3),
      (n = "; expires=" + t.toUTCString());
  }
  document.cookie = t + "=" + (e || "") + n + "; path=/";
}

function getCookie(t) {
  const e = t + "=",
    o = document.cookie.split(";");
  for (let t = 0; t < o.length; t++) {
    let n = o[t];
    for (; " " === n.charAt(0); ) n = n.substring(1, n.length);
    if (0 === n.indexOf(e)) return n.substring(e.length, n.length);
  }
  return null;
}

function storeTodayDate() {
  const t = new Date().toISOString().split("T")[0];
  localStorage.setItem("todayDate", t);
}

function getStoredDate() {
  return localStorage.getItem("todayDate");
}

function getUserLocation() {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(showPosition, showError)
    : console.error("Geolocation is not supported by this browser.");
}

function showPosition(t) {
  // Removed console.log
}

function showError(t) {
  switch (t.code) {
    case t.PERMISSION_DENIED:
      // Removed console.error
      break;
    case t.POSITION_UNAVAILABLE:
      // Removed console.error
      break;
    case t.TIMEOUT:
      // Removed console.error
      break;
    case t.UNKNOWN_ERROR:
    // Removed console.error
  }
}

function updateCountdown() {
  const t = new Date("2025-01-27T00:00:00") - new Date(),
    e = Math.floor(t / 864e5),
    o = Math.floor((t % 864e5) / 36e5),
    n = Math.floor((t % 36e5) / 6e4),
    r = Math.floor((t % 6e4) / 1e3),
    i = document.getElementById("days"),
    s = document.getElementById("hours"),
    a = document.getElementById("minutes"),
    c = document.getElementById("seconds");

  if (i && s && a && c) {
    i.textContent = e.toString().padStart(2, "0");
    s.textContent = o.toString().padStart(2, "0");
    a.textContent = n.toString().padStart(2, "0");
    c.textContent = r.toString().padStart(2, "0");
  }

  if (t <= 0 && i && s && a && c) {
    i.textContent = "00";
    s.textContent = "00";
    a.textContent = "00";
    c.textContent = "00";
  }
}

window.addEventListener("scroll", function () {
  // Removed console.log
});

setInterval(updateCountdown, 1e3);
updateCountdown();

document
  .querySelectorAll(".connect-thrive-faq-section-question")
  .forEach((t) => {
    t.addEventListener("click", () => {
      const e = t.nextElementSibling,
        o = t.querySelector(".connect-thrive-faq-section-toggle");
      if (e.style.display === "block") {
        e.style.display = "none";
        o.textContent = "+";
      } else {
        e.style.display = "block";
        o.textContent = "-";
      }
    });
  });

const testimonials = [
  document.getElementById("testimonial1"),
  document.getElementById("testimonial2"),
  document.getElementById("testimonial3"),
];

const mobileTestimonials = Array.from(
  document.querySelectorAll(".connect-thrive-testimonial-section-mobile-box")
);

let currentIndex = 0;

function showNextTestimonial() {
  testimonials[currentIndex].style.display = "none";
  mobileTestimonials[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].style.display = "block";
  mobileTestimonials[currentIndex].style.display = "block";
  testimonials[currentIndex].classList.add(
    "connect-thrive-testimonial-section-shake"
  );
  mobileTestimonials[currentIndex].classList.add(
    "connect-thrive-testimonial-section-shake"
  );
  setTimeout(() => {
    testimonials[currentIndex].classList.remove(
      "connect-thrive-testimonial-section-shake"
    );
    mobileTestimonials[currentIndex].classList.remove(
      "connect-thrive-testimonial-section-shake"
    );
  }, 500);
}

testimonials[currentIndex].style.display = "block";
mobileTestimonials[currentIndex].style.display = "block";

setInterval(showNextTestimonial, 3000);

//our service

document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(
    ".connect-thrive-our-service-box"
  );
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(serviceBoxes).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 400); // Delay for each box based on its index
        observer.unobserve(entry.target); // Stop observing after it has appeared
      }
    });
  }, options);

  serviceBoxes.forEach((box) => {
    observer.observe(box);
  });
});

//particles.js
particlesJS.load("particles-js", "path/to/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

// Particles.js configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // White color particles
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff", // White color for lines
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Use IntersectionObserver to detect when the section comes into view
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const image = document.getElementById("spiral-dotted");
        if (entry.isIntersecting) {
          image.classList.add("visible"); // Add 'visible' class to apply fade-in, zoom-in, and rotation
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  const target = document.getElementById("connect-thrive-section");
  observer.observe(target);
});
