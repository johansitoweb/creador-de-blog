function guardarEntrada() {
    const titulo = document.getElementById('blogTitle').value;
    const contenido = document.getElementById('blogContent').value;
    const link = document.getElementById('blogLink').value;
    const imageFile = document.getElementById('blogImage').files[0];
    const textColor = document.getElementById('textColor').value;

    if (titulo && contenido) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const entrada = { titulo, contenido, link, image: event.target.result, textColor };
            const entradas = JSON.parse(localStorage.getItem('entradas')) || [];
            entradas.push(entrada);
            localStorage.setItem('entradas', JSON.stringify(entradas)); // Guardar en localStorage
            alert('Entrada guardada con éxito.');
        };
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            const entrada = { titulo, contenido, link, image: null, textColor };
            const entradas = JSON.parse(localStorage.getItem('entradas')) || [];
            entradas.push(entrada);
            localStorage.setItem('entradas', JSON.stringify(entradas)); // Guardar en localStorage
            alert('Entrada guardada con éxito.');
        }
    } else {
        alert('Por favor, completa el título y el contenido.');
    }
}

function verEntradas() {
    window.location.href = 'index.html'; // Redirige a la página de entradas
}