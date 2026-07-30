const rotaBase = "https://lion-school-phbo.onrender.com"

export const obterAllCursos = async function () {
    const rotaCurso = `${rotaBase}/cursos`
    try {
        let response = await fetch(rotaCurso)
        if (response.ok) {
            let respostaAPI = await response.json()
            if (respostaAPI.length >0 ) {
                return respostaAPI
            } else {
                console.warn("Ops, a API não retornou nada!")
                return false
            } 
            
        }

    } catch (error) {
        console.error(error)
        return false
    } 
}