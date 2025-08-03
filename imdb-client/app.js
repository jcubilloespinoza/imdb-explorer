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


fetch('http://localhost:5000/topseries')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('seriesList');
        data.forEach(serie => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${serie.primarytitle}</h3><p>${serie.startyear} - ⭐ ${serie.averagerating} </p>`;
            container.appendChild(div);
        });
    });


fetch('http://localhost:5000/hiddengems')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('hiddenGems');
        data.forEach(gem => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${gem.primarytitle}</h3><p>${gem.startyear} - ⭐ ${gem.averagerating} </p>`;
            container.appendChild(div);
        });
    });

fetch('http://localhost:5000/topcountries')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('topCountries');
        data.forEach(country => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${country.region}</h3><p>${country.count}</p>`;
            container.appendChild(div);
        });
    });