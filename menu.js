const btn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');

btn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

// Opcional: cerrar el menú si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});


const btnCliente = document.querySelector('.access-buttons button:first-child');
const btnEmpleado = document.querySelector('.access-buttons button:last-child');

btnCliente.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.remove('fondo-morado');
  btnEmpleado.style.visibility = 'visible'; // Vuelve a mostrar el botón
});

btnEmpleado.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.add('fondo-morado');
  btnEmpleado.style.visibility = 'hidden';
});