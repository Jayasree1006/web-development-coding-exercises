
    const minInput = document.getElementById("min-num");
    const maxInput = document.getElementById("max-num");
    const priceSlider = document.getElementById("price-slider");

    const updateInputs = () => {
        let minPrice = parseInt(minInput.value);
        let maxPrice = parseInt(maxInput.value);

        if (minPrice < 0) {
            alert("Minimum price cannot be less than 0");
            minPrice = 0;
        }

        if (maxPrice > 10000) {
            alert("Maximum price cannot be greater than 10000");
            maxPrice = 10000;
        }

        if (minPrice > maxPrice) {
            maxPrice = minPrice;
        }

        minInput.value = minPrice;
        maxInput.value = maxPrice;
        priceSlider.value = minPrice;
    };

    minInput.addEventListener("input", updateInputs);
    maxInput.addEventListener("input", updateInputs);
    priceSlider.addEventListener("input", () => {
        minInput.value = priceSlider.value;
        updateInputs();
});
