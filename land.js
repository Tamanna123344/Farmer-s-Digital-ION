document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const propertyList = document.getElementById('property-list');
    const propertyResults = document.getElementById('property-results');

    searchButton.addEventListener('click', function () {
        const selectedCrop = document.getElementById('crop-type').value;
        const selectedState = document.getElementById('state').value;

        // In a real application, you would fetch land property data based on the selected crop and state
        // from a database or data source and display the results here.
        // For demonstration purposes, we provide static property data.
        const properties = getMockProperties(selectedCrop, selectedState);

        // Clear previous results
        propertyResults.innerHTML = '';

        // Display property results
        properties.forEach((property) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Property ID: ${property.id}, Area: ${property.area} acres, Price: $${property.price}`;
            propertyResults.appendChild(listItem);
        });

        propertyList.classList.remove('hidden');
    });

    // Mock function to provide static property data
    function getMockProperties(crop, state) {
        // In a real application, you would fetch this data from a database.
        return [
            { id: 1, crop: crop, state: state, area: 50, price: 10000 },
            { id: 2, crop: crop, state: state, area: 75, price: 15000 },
            { id: 3, crop: crop, state: state, area: 60, price: 12000 },
        ];
    }
});
