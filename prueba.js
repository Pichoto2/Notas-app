document.addEventListener("DOMContentLoaded", function () {
    const selectCategoria = document.getElementById("categoria");
    const inputNuevaCategoria = document.getElementById("nuevaCategoria");

    // Lista inicial de categorías
    const categorias = [
        "Categoría 1",
        "Categoría 2",
        "Categoría 3",
        "Categoría 4",
        "Categoría 5"
    ];

    // Función para agregar una nueva categoría
    function agregarCategoria() {
        const nuevaCategoria = inputNuevaCategoria.value.trim();

        if (nuevaCategoria !== "") {
            categorias.push(nuevaCategoria);

            inputNuevaCategoria.value = "";

            // Actualizar las opciones en el select
            selectCategoria.innerHTML = "";
            categorias.forEach(function (categoria) {
                const option = document.createElement("option");
                option.value = categoria;
                option.textContent = categoria;
                selectCategoria.appendChild(option);
            });
        }
    }

    // Asignar la función al botón "Agregar Categoría"
    document.getElementById("nuevaCategoria").addEventListener("click", agregarCategoria());
});