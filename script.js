var listaFilmes = [
  'https://br.web.img3.acsta.net/medias/nmedia/18/87/87/63/19962446.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/87/82/34/20028625.jpg',
  'https://br.web.img3.acsta.net/pictures/19/01/30/09/40/0392469.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg',
  'https://br.web.img3.acsta.net/pictures/16/09/21/19/14/207893.jpg',
  'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg'
]

listaFilmes.push(
  'https://br.web.img2.acsta.net/pictures/17/11/28/18/32/3262971.jpg'
)

for (let i = 0; i < listaFilmes.length; i++) {
  document.write('<img src=' + listaFilmes[i] + '>')
}

function adicionarFilme() {
  var adicionar = document.getElementById('adicionar').value
  document.getElementById('erro').innerHTML = ''

  if (adicionar.endsWith('.jpg')) {
    mostrarNaTela(adicionar)
  } else {
    document.getElementById('erro').innerHTML = 'Insira uma URL válida'
  }
  document.getElementById('adicionar').value = ''
}

function mostrarNaTela(filme) {
  if (listaFilmes.includes(filme)) {
    document.getElementById('erro').innerHTML =
      'Esse filme/série já foi adicionado'
  } else {
    listaFilmes.push(filme)
    var body = document.querySelector('body')
    body.innerHTML += '<img src=' + filme + '>'
  }
}

// https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg

// https://m.media-amazon.com/images/I/51e--v23UnL.jpg
