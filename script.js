document.addEventListener("DOMContentLoaded", function () {
    const moviesList = document.getElementById("movies-list");

    fetch("http://3.87.222.128:3000/api/movies")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos");
            }
            return response.json();
        })
        .then(data => {
            moviesList.innerHTML = "";
            data.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = `${movie.title} - ${movie.overview}`;
                moviesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            moviesList.innerHTML = `<p style="color:red;">No se pudieron cargar las películas.</p>`;
        });
});
