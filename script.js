// Formulario de contacto (de muestra: solo muestra un mensaje en pantalla, no envía nada)
document.getElementById('send').addEventListener('click', function () {
  var nombre = document.getElementById('n').value.trim();
  var ok = document.getElementById('ok');
  ok.textContent = nombre
    ? 'Gracias, ' + nombre + '. Recibimos tu mensaje y te escribiremos pronto.'
    : 'Escribe tu nombre para poder responderte.';
});

// Menú desplegable (móvil)
var nav = document.querySelector('nav');
var menuBtn = document.getElementById('menuBtn');

function toggleMenu(abrir) {
  nav.classList.toggle('open', abrir);
  menuBtn.setAttribute('aria-expanded', abrir);
  menuBtn.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
}

menuBtn.addEventListener('click', function () {
  toggleMenu(!nav.classList.contains('open'));
});

// Se cierra al elegir una sección o al pulsar Escape
document.querySelectorAll('#menu a').forEach(function (a) {
  a.addEventListener('click', function () { toggleMenu(false); });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') toggleMenu(false);
});
