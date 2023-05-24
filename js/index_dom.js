import scrollTopButton from "./dom/botton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";




const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "may 24, 2023 09:01:19", "Feliz Cumpleaños");
  scrollTopButton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");

});
