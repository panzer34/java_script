(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    console.log("Este mensaje cargara de cualquier forma");
  });

  // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
   xhr.open("GET", "assets/users.json");

  xhr.send();
})();