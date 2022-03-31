fetch('scripts/read.php')
    .then(resp => resp.json())
    .then(resp => resp.map(d => {
        document.querySelector('#staffTable').innerHTML += 
        `<div class="apprentice ${d.class}">
            <div class="apprenticeInfo">
                <div class="artistPic">
                    <img src="${d.artist_pic}">
                </div>
                <div class="artistInfo">
                    <h1 class="artistName">${d.name}</h1>
                    <h3 class="artistRole">${d.role}</h3>
                    <p class="artistStatement">${d.statement}</p>
                </div>
            </div>
            <div class="projectPic${d.class}">
                <img src="${d.project_pic}">
            </div>
        </div>`;
    }));