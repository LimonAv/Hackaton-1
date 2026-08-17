# 🏀 NexoSport

Landing page para una tienda deportiva online, construida con **HTML, CSS y JavaScript vanilla**, apoyada en **Bootstrap 5** para el layout y componentes responsivos.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

- **Navbar responsive** con menú colapsable y ícono de carrito con contador animado
- **Hero banner** de ancho completo con imagen de fondo, overlay para contraste y panel de vidrio (glassmorphism)
- **Buscador estético** de productos con estilo pill/glass
- **Carrusel de productos destacados** (Bootstrap Carousel) con cards por producto
- **Botón "Ver catálogo completo"** alineado al final de la sección de productos
- **Carrito interactivo**: cada botón "Agregar" incrementa el contador del ícono del carrito con una animación de rebote
- **Diseño glassmorphism**: navbar, cards, buscador y hero comparten fondos semitransparentes con `backdrop-filter: blur()`
- **Fondo animado** con pelotas (basketball, fútbol, tenis) dibujadas en CSS puro, flotando de forma sutil detrás del contenido
- **Footer** con columnas de enlaces (Compañía, Ayuda, Tienda) y redes sociales

## 🗂️ Estructura del proyecto

```
├── index.html          # Estructura principal de la página
├── styles.css           # Estilos, glassmorphism, animaciones y pelotas de fondo
├── script.js             # Lógica del carrito y contador animado
├── images/                # Imágenes del sitio (hero, productos, etc.)
└── README.md
```

## 🚀 Cómo usarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nexosport.git
   ```
2. Abre `index.html` directamente en tu navegador, o sirve la carpeta con una extensión como **Live Server** (VS Code) para recarga automática.
3. No requiere instalación de dependencias: Bootstrap y los íconos se cargan vía CDN.

## 🛠️ Tecnologías utilizadas

- [Bootstrap 5.3.3](https://getbootstrap.com/) — grid, componentes (navbar, carousel, cards) y utilidades
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) — iconografía (carrito, redes sociales, flechas)
- CSS puro para: glassmorphism, animaciones (`@keyframes`), pelotas deportivas dibujadas con gradientes/`clip-path`
- JavaScript vanilla para la interacción del carrito (sin frameworks ni librerías externas)

## 📌 Notas de desarrollo

- El buscador de productos es **estético**, aún no está conectado a lógica de filtrado.
- El botón "Ver catálogo completo" actualmente apunta a `#` como placeholder.
- Las imágenes de productos deben colocarse en la carpeta `images/` respetando los nombres referenciados en `index.html`.

## 📄 Licencia

Este proyecto es de uso libre para fines de práctica y aprendizaje.
