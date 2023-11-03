document.addEventListener('DOMContentLoaded', function () {
    const predictButton = document.getElementById('predict-button');
    const predictionResult = document.getElementById('prediction-result');
    const predictedPrice = document.getElementById('predicted-price');

    predictButton.addEventListener('click', function () {
        const selectedCrop = document.getElementById('crop-type').value;
        const selectedState = document.getElementById('state').value;

        // In a real application, you would fetch data based on the selected crop and state
        // and perform predictions using a machine learning model or relevant algorithms.
        // For simplicity, we use random data and generate a random price here.
        const randomPrice = (Math.random() * 10).toFixed(2);

        predictionResult.classList.remove('hidden');
        predictedPrice.textContent = `$${randomPrice} per kg of ${selectedCrop} in ${selectedState}`;
    });
});
