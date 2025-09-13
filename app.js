const API_ENDPOINT = "https://api.real-prod-api.com/data";
const dataContainer = document.getElementById('data-container');
const loadBtn = document.getElementById('load-data-btn');

function fetchData(){
    fetch(API_ENDPOINT).then(response => response.json())
    .then(data => {
        dataContainer.innerHTML = `<strong> Data Loaded: </strong> ${data.message}`;
    }).catch(error => {
        dataContainer.innerHTML = `<span class = "error"> Failed to load data. </span>`;
        console.error('Fetch Error:', error);
    });
}
loadBtn.addEventListener('click', fetchData);