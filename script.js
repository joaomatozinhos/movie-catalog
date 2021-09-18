var listaFilmes = [
  'https://br.web.img3.acsta.net/medias/nmedia/18/87/87/63/19962446.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/87/82/34/20028625.jpg',
  'https://br.web.img3.acsta.net/pictures/19/01/30/09/40/0392469.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg',
  'https://br.web.img3.acsta.net/pictures/16/09/21/19/14/207893.jpg',
  'https://br.web.img3.acsta.net/pictures/20/12/18/10/24/4751126.jpg',
  'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg'
]

listaFilmes.push(
  'https://br.web.img2.acsta.net/pictures/17/11/28/18/32/3262971.jpg'
)

for (let i = 0; i < listaFilmes.length; i++) {
  document.write('<img src=' + listaFilmes[i] + '>')
}

var buttonAdicionar = document.getElementById('button-adicionar')

buttonAdicionar.addEventListener('click', adicionarFilme)

function adicionarFilme() {
  var adicionar = document.getElementById('adicionar').value
  document.getElementById('novoFilme').innerHTML = '<img src=' + adicionar + '>'

  document.getElementById('adicionar').value = ''
  if (inserir == '') {
    document.getElementById('novoFilme').innerHTML = 'Insira uma URL válida'
  }
}