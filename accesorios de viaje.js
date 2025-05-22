// accesorios de viaje.js

// — Referencias DOM únicas —
const body        = document.body;
const toggle      = document.getElementById('dark-toggle');
const carritoBtn  = document.getElementById('carrito-toggle');
const carritoEl   = document.getElementById('carrito');
const itemsEl     = document.getElementById('items-carrito');
const totalEl     = document.getElementById('total');
const vaciarBtn   = document.getElementById('vaciar');
const soundAdd    = document.getElementById('sound-add');
const soundEmpty  = document.getElementById('sound-empty');

// — Estado del carrito como array —
let carrito = [];

// — Modo oscuro —
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// — Mostrar / Ocultar carrito —
carritoBtn.addEventListener('click', () => {
  carritoEl.classList.toggle('open');
});

const carritoToggle = document.getElementById('carrito-toggle');
carritoToggle.classList.add('added');
setTimeout(() => carritoToggle.classList.remove('added'), 300);

// — Agregar producto con sonido y animaciones —
document.querySelectorAll('.agregar').forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    const precio = parseFloat(btn.dataset.precio);

    // Añadir al array
    carrito.push({ nombre, precio });
    renderCarrito();

    // Sonido “add”
    soundAdd.currentTime = 0;
    soundAdd.play();

    // Animación pop en botón
    btn.classList.add('pop');
    setTimeout(() => btn.classList.remove('pop'), 400);

    // Animación shake en icono carrito
    carritoBtn.classList.add('shake');
    setTimeout(() => carritoBtn.classList.remove('shake'), 500);
  });
});

// — Vaciar carrito con sonido y animación —
vaciarBtn.addEventListener('click', () => {
  if (carrito.length === 0) return;  // nada que vaciar

  carrito = [];
  renderCarrito();

  // Sonido “empty”
  soundEmpty.currentTime = 0;
  soundEmpty.play();

  // Animar cada ítem saliendo
  itemsEl.querySelectorAll('li').forEach(li => {
    li.classList.add('slide-out');
  });
});

// — Función para renderizar el carrito y total —
function renderCarrito() {
  itemsEl.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    total += item.precio;
    const li = document.createElement('li');
    li.textContent = `${item.nombre} — $${item.precio.toFixed(2)}`;
    itemsEl.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
}
