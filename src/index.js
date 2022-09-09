const init = () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById('searchByID').value;
        fetchMovies(id);
    });

}
async function fetchMovies(id) {
    // To pass the tests, don't forget to return your fetch!
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await response.json();
    return render(data);

}

function render(data) {
    const parent = document.querySelector("ul");
    const list = document.createElement("li");
    const title = document.createElement("h3");
    title.innerText = data.title;
    const id = document.createElement("div");
    id.innerText = `ID: ${data.id}`;

    list.appendChild(title);
    list.appendChild(id);
    parent.appendChild(list);

}

document.addEventListener('DOMContentLoaded', init);