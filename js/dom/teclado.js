const d = document;


export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("haz lanzado una alerta con el Teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("haz lanzado una alerta con el Teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("haz lanzado una alerta con el Teclado");
  }
}