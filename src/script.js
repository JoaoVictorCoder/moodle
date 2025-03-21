const botaoBar = document.getElementById('botaoBar')
const corpoBar = document.getElementById('corpoBar')
const tecnologia = document.getElementById("tecnologia")
const design = document.getElementById('design')
const marketing = document.getElementById('marketing')
const ecommerce = document.getElementById('ecommerce')
const eletronica = document.getElementById('eletronica')
const inicio = document.getElementById('inicio')
const cursosValores = ['Curso1', 'Curso2', 'Curso3', 'Curso4']
const cursosDiv = document.getElementsByClassName('cursos')[0]
const cursos = document.getElementsByTagName('a')
let opcao
let titulo
function adicionaEvento(elemento, opcao) {
    elemento.addEventListener('click', () => {
        if (opcao == -1) {
            window.location.replace('/moodle/')

        } else {
            localStorage.setItem('categoria', opcao)
            window.location.replace('/moodle/paginas/cursos')
        }

    })
}

corpoBar.style.display = 'none'

botaoBar.addEventListener('click', () => {
    if (corpoBar.style.display == 'none') {
        corpoBar.style.display = 'block'
    } else {
        corpoBar.style.display = 'none'
    }
})

adicionaEvento(tecnologia, 0)
adicionaEvento(design, 1)
adicionaEvento(marketing, 2)
adicionaEvento(ecommerce, 3)
adicionaEvento(eletronica, 4)
adicionaEvento(inicio, -1)


if(window.location.pathname == '/moodle/paginas/cursos') 
    titulo = document.getElementById('titulo')
    opcao = localStorage.getItem('categoria')
    switch(opcao) {
        case '0':
            titulo.innerText = 'Tecnologia'
            break
        case '1':
            titulo.innerText = 'Design'
            break
        case '2':
            titulo.innerText = 'Marketing'
            break
        case '3':
            titulo.innerText = 'E-Commerce'
            break
        case '4':
            titulo.innerText = 'Eletronica'
            break
    }
    cursosValores.forEach((curso, index) => {
        cursosDiv.innerHTML = cursosDiv.innerHTML + `<div class="curso"><a>${curso}</a></div>`
        cursos[index].href = './curso'
    })
