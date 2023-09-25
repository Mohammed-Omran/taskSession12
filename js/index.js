let fetchData = async () => {
    try {
        let response = await fetch('https://api.example.com/data'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();

        let dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = '';

        data.forEach(item => {
            let dataItem = document.createElement('div');
            dataItem.classList.add('data-item');
            dataItem.textContent = item.title; 
            dataContainer.appendChild(dataItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

let fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchData);

