document.addEventListener("DOMContentLoaded", function () {
    const moviesList = document.getElementById("movies-list");

    fetch("http://balanceador-docker-670246088.us-east-1.elb.amazonaws.com/api/movies")
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
