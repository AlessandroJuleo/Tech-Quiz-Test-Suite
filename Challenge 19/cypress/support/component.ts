import "../../client/src/App.css";
 // Importa estilos globales

// Cargar el CSS manualmente en el `head` del documento
Cypress.on("window:before:load", (win) => {
  const link = win.document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/src/App.css"; // Intenta forzar el cargado del CSS
  win.document.head.appendChild(link);
});

// Importa los comandos personalizados de Cypress
import "./commands";
