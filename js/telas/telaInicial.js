/*
    <main>


        <div class="text-device">

            <h1 class="main-text">
                Escolha um <span class="nova-cor">curso</p> <p class="main-text">para gerenciar</p>
            </h1>

            <div class="devices">
                <img src="../img/devices.png" alt="devices">
            </div>

        </div>


        <div class="estudante">
            <img src="../img/studant.png" alt="estudante">
        </div>


        

        <div class="box-cursos"

        </div>


    </main> */

import { obterAllCursos } from "../rotas.js"


function criarCardCurso(curso) {

    const box_curso = document.createElement("div")
    box_curso.classList.add("box-curso")

    const imgCurso = document.createElement("img")
    imgCurso.src = curso.icon
    imgCurso.alt = curso.sigla

    box_curso.append(imgCurso)

    const nomeCurso = document.createElement("h2")
    nomeCurso.textContent = curso.sigla

    box_curso.append(nomeCurso)
    box_curso.addEventListener("click", function () {
        alert(`Indo para o curso ${curso.nome}`)
    })

    return box_curso
}

export async function criarTelaInicial() {

    const main = document.getElementById("conteudoPagina")
    main.textContent = ""

    const text_device = document.createElement("div")
    text_device.classList.add("text-device")

    const mainText = document.createElement("h1")
    mainText.classList.add("mainText")
    mainText.textContent = "Escolha um"

    const span_class = document.createElement("span")
    span_class.classList.add("nova-cor")
    span_class.textContent = "curso"

    mainText.append(span_class)

    const p_class = document.createElement("p")
    p_class.classList.add("main-text")
    p_class.textContent = "para gerenciar"

    span_class.append(p_class)

    text_device.append(mainText)


    const div_devices = document.createElement("div")
    div_devices.classList.add("devices")

    const imgDevices = document.createElement("img")
    imgDevices.classList.add("devices")
    imgDevices.src = "../img/devices.png"
    imgDevices.alt = "devices"


    div_devices.append(imgDevices)


    text_device.append(div_devices)


    const divEstudante = document.createElement("div")
    divEstudante.classList.add("estudante")

    const imgEstudante = document.createElement("img")
    imgEstudante.src = "../img/studant.png"
    imgEstudante.alt = "estudante"

    divEstudante.append(imgEstudante)

    const div_box_cursos = document.createElement("div")
    div_box_cursos.classList.add("box-cursos")
    
    let cursos = await obterAllCursos() 
    cursos.forEach((curso) => {
    let htmlCurso = criarCardCurso(curso)
    div_box_cursos.append(htmlCurso)
    })

    main.append(text_device, divEstudante, div_box_cursos)
    
     

}
