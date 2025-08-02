fetch('http://localhost:5000/topmovies')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('movieList');
        data.forEach(movie => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${movie.primarytitle}</h3><p>${movie.startyear} - ⭐ ${movie.averagerating} </p>`;
            container.appendChild(div);
        });
    });
