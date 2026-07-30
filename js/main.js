`use strict`

import { obterAllCursos } from "./rotas.js"

/*
        <div class="box-cursos"> -feito
            <div class="box-curso"> 
                <img src="../img/ds.png" alt="ds">
                <h2>DS</h2>
            </div>
            <div class="box-curso">
                <img src="../img/redes.png" alt="redes">
                <h2>REDES</h2>
            </div>
        </div>

*/



function criarCardCurso (curso) {

    const box_de_cursos = document.getElementById("box-de-cursos")

    const box_curso = document.createElement("div")
    box_curso.classList.add("box-curso")

    const imgCurso = document.createElement("img")
    imgCurso.src = curso.icon
    imgCurso.alt = curso.sigla 

    box_curso.append(imgCurso)

    const nomeCurso = document.createElement("h2")
    nomeCurso.textContent = curso.sigla

    box_curso.append(nomeCurso)
    box_curso.addEventListener("click" , function(){
        alert(`Indo para o curso ${curso.nome}`)
    })
    box_de_cursos.append(box_curso)

}

async function criarTelaInicial () {
    let cursos = await obterAllCursos() 
    cursos.forEach((curso) => {
        criarCardCurso(curso)
    })

}

criarTelaInicial()