function search() {
    const API_KEY = "AIzaSyDZlSd6P3RhruRwFVNTASLC-KeSTvw-Xco";
    const cx = "017576662512468239146:omuauf_lfve";
    const searchTerm = document.getElementById("input").value;

    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
        const results = data.items;
        let html = "";
        results.forEach(result => {
            html += `<a href="${result.link}">${result.title}</a><br>`;
        });
    document.getElementById("result").innerHTML = html;
    })
    .catch(error => console.error(error));
}