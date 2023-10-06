

const DATOS = [{ titulo: 'Ejemplo título', categoria: 'Categoría 1', contenido: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem'}]

const categorias = ["Categoría 1","Categoría 2","Categoría 3","Categoría 4","Categoría 5"];

let categoria_insertar = document.getElementById('categoria-insertar')
let nota_insertar = document.getElementById('nota-insertar')

function tituloEnUso(titulo) {
    for (let i = 0; i < DATOS.length; i++) {
        const tituloDatos = DATOS[i].titulo;

        if (titulo === tituloDatos) {
            return i;
        }
    }
    return -1
}


function anadirNota(){

    const cardDeck = document.getElementById("cards")
    const titulo = document.getElementById("titulo-insertar").value
    const categoria = document.getElementById("categoria-insertar").value
    const contenido = document.getElementById("contenido-insertar").value

    if (!tituloEnUso(titulo) !== -1 && titulo !== "" && categoria !== "" && contenido !== ""){
        DATOS.push({titulo, categoria, contenido})
    }

    cardDeck.innerHTML = "";
    i=0
    DATOS.forEach(function (dato){
        const card = document.createElement("div")
        card.className="card mr-5 ml-5 mb-5"
        card.innerHTML=""
        card.id = dato.titulo
        card.style = "max-width: 19rem; min-width: 13.5rem;  min-height: 15rem; max-height: 15rem"
        card.innerHTML += 
            `<div class="d-flex justify-content-between align-items-center ">
                <h4 class="card-title mt-2 ml-2">${dato.titulo}</h4>
                    <button class="btn" style="margin-right: 2%;" type="button" id="dropdownNota" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <img src="mostrar-mas-boton-con-tres-puntos.png" height ="15" width="15" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownNota">
                        <a class="dropdown-item" data-toggle="modal" data-target="#editarCard-${i}">Editar</a>
                        <a class="dropdown-item" data-toggle="modal" data-target="#seguro">Eliminar</a>
                    </div>
            </div>
                
            <div class="card-body" style="overflow: hidden; max-height:9rem">
                <p class="card-text">${dato.contenido}</p>
            </div>
            <button class="btn" style="background-color: #dbdbe1; position:absolute; bottom:0; min-width:100%" data-toggle="modal" data-target="#card-${i}">Ver más</button>

            
            

            <div class="modal fade" id="card-${i}" tabindex="-1" role="dialog" aria-labelledby="card-${i}Label" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="card-${i}Label">${dato.titulo}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            ${dato.contenido}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="editarCard-${i}" tabindex="-1" role="dialog" aria-labelledby="editarCard-${i}Label" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editarCard-${i}Label">Editar Nota</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="titulo" class="col-form-label">Título:</label>
                                <input type="text" class="form-control" id="titulo-editarCard-${i}" value="${dato.titulo}">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Categoria:</label>
                                <select class="custom-select" id="categoria-editarCard-${i}"></select>
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Contenido:</label>
                                <textarea class="form-control" id="contenido-editarCard-${i}"></textarea>
                            </div>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="editarNota(${i})">Guardar Cambios</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="seguro" tabindex="-1" role="dialog" aria-labelledby="seguroLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="card-${i}Label">¿Está seguro de que quiere eliminar la nota?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="eliminarNota(${i})">Eliminar</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        cardDeck.appendChild(card);
        agregarCategoria(i);
        document.getElementById("categoria-editarCard-"+i).value = dato.categoria
        i++
    })
    
}

function agregarCategoria(i) {
    const inputNuevaCategoria = document.getElementById("categoriaNueva-insertar");
        if (i == -1){
            selectCategoria = document.getElementById("categoria-insertar");
        }
        else{
            selectCategoria = document.getElementById("categoria-editarCard-"+i);
        }
        
        if (inputNuevaCategoria.value !== "") {
            categorias.push(inputNuevaCategoria.value);
        }
        selectCategoria.innerHTML = "";
        categorias.forEach(function (categoria) {
            const option = document.createElement("option");
            option.value = categoria;
            option.textContent = categoria;
            selectCategoria.appendChild(option);
        });
    }

function editarNota(i){
    const titulo = document.getElementById("titulo-editarCard-"+i).value
    const categoria = document.getElementById("categoria-editarCard-"+i).value
    const contenido = document.getElementById("contenido-editarCard-"+i).value
    if (!tituloEnUso(titulo) !== -1 && titulo !== "" && categoria !== "" && contenido !== ""){
        DATOS[i].titulo = titulo
        DATOS[i].categoria = categoria
        DATOS[i].contenido = contenido
    }
    anadirNota()
}

function eliminarNota(i){
    DATOS.splice(i,1)
    anadirNota()
}

document.addEventListener("DOMContentLoaded", function () {
    anadirNota();
    agregarCategoria(-1);
    
});

