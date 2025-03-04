//conexion con html

const songForm = document.getElementById("song_form");
const playList = document.getElementById("play_list");

//Funcion para agregar una canciona a la playlist
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
        <strong> ${songName} </strong>
        - ${artistName}
        <a href="${songUrl}" target="_blank" >Reproducir</a>
        <button class="delete-btn" > Eliminar </button>
    `;


    //Agregar al HTML
    playList.appendChild(listSong);

}

//Manejo de envio de formularios (Eventos)

songForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    //Obtener datos del formulario
    const songName = document.getElementById("song_name").value;
    const artistNamE = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("song_url").value;

    addSong(songName, artistNamE, songUrl);

    songForm.reset();

})
