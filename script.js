document.addEventListener("DOMContentLoaded", function () {
    const moviesList = document.getElementById("movies-list");

    fetch("http://3.87.222.128:3000/api/movies") // IP del backend DIRECTAMENTE
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos");
            }
            return response.json();
        })
        .then(data => {
            console.log("📌 Datos recibidos:", data); // Verificar que llegan datos al frontend
            moviesList.innerHTML = ""; // Limpiar contenido anterior
            data.forEach(movie => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="movie">
                        <img src="${movie.poster_path}" alt="${movie.title}">
                        <div class="info">
                            <h2>${movie.title}</h2>
                            <p>${movie.overview}</p>
                            <span class="genre">🎭 ${movie.genre}</span>
                            <span class="rating">⭐ ${movie.vote_average || "N/A"}</span>
                        </div>
                    </div>
                `;
                moviesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("❌ Error en fetch:", error);
            moviesList.innerHTML = `<p style="color:red;">No se pudieron cargar las películas.</p>`;
        });
});
