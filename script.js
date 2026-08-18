// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("click", () => {
        alert("¡Hola! Has hecho clic en el botón.");
    });
});


// JavaScript
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');

// Selecciona TODOS los botones "Agregar al carrito" de la página
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
    // 1. Incrementa el contador
    cartCount++;
    cartCountEl.textContent = cartCount;

    // 2. Dispara la animación en el ícono del carrito
    cartIcon.classList.add('cart-bounce');

    // 3. Quita la clase después de que termine la animación (0.4s)
    //    para que pueda volver a activarse la próxima vez
    setTimeout(() => {
       cartIcon.classList.remove('cart-bounce');
    }, 400);
    });
});