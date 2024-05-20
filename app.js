// Evitar que hagan click derecho
document.oncontextmenu = function() {
  return false;
 };

// Función para manejar el deslizamiento del navbar
const handleNavbarSlide = () => {
  // Obtener elementos 
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Añadir evento clic al burger
  burger.addEventListener("click", () => {
    // Alternar la clase 'nav-active' para mostrar o ocultar el navbar
    nav.classList.toggle("nav-active");

    // Animar los enlaces del navbar
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .6}s`;
      }
    });

    // Alternar la clase 'toggle' para la animación del burger
    burger.classList.toggle("toggle");
  });
};

// Función para controlar el botón de volver al inicio
const handleGoTopButton = () => {
  // Obtener el botón de volver al inicio
  const goTopButton = document.querySelector('.go-top-btn');

  // Agregar un event listener para el scroll
  window.addEventListener('scroll', () => {
    // Si el scroll vertical es mayor que 100px, mostrar el botón; de lo contrario, ocultarlo
    if (window.scrollY > 100) {
      goTopButton.classList.add('show'); // Agrega la clase 'show' para mostrar el botón
    } else {
      goTopButton.classList.remove('show'); // Elimina la clase 'show' para ocultar el botón
    }
  });

  // Agregar un event listener para el clic en el botón
  goTopButton.addEventListener('click', () => {
    // Hacer scroll suave al principio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// Llamada a las funciones al cargar la página
window.onload = () => {
  handleNavbarSlide();
  handleGoTopButton(); // Llama a la función para controlar el botón de volver al inicio
};

 

