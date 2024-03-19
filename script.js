function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#perfil img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de uma pessoa que nao é o lucas com ctz")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Lucas josue alves de terno sorrindo fundo creme"
    )
  }

  // pegar a tag img e substituir a imagem
}
