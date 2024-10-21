"use strict"; 

document.getElementById('btn').addEventListener('click', function() {
    fetch('json/cars.json')  
        .then(response => response.json())
        .then(data => {

            // Henter output sektionen, hvor bilerne skal vises
            const outputSection = document.querySelector('.outputCars');
            
            data.forEach(car => {
                const carCard = document.createElement('div');
                carCard.classList.add('car-card');

                const brandName = document.createElement('h2');
                brandName.textContent = car.brandname;  // Rette variabel

                const carModel = document.createElement('p');
                carModel.textContent = `Model: ${car.model}`;

                const carColor = document.createElement('p');
                carColor.textContent = `Color: ${car.color}`;

                const carEngine = document.createElement('p');
                carEngine.textContent = `Engine: ${car.engine}`;

                const carImage = document.createElement('img');
                carImage.src = car.img;  // Rette variabel
                carImage.alt = car.brandname;

                // Tilføj elementer til kortet
                carCard.appendChild(brandName);
                carCard.appendChild(carModel);
                carCard.appendChild(carColor);
                carCard.appendChild(carEngine);
                carCard.appendChild(carImage);

                // Tilføj kortet til output-sektionen
                outputSection.appendChild(carCard);
            });
        })
        .catch(error => {
            console.error('Error fetching the cars.json file:', error);
        });
});
