document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 'fc-1888', name: 'flux capacitor', avgRating: 4.5 },
        { id: 'fc-2050', name: 'power laces', avgRating: 4.7 },
        { id: 'fs-1987', name: 'time circuits', avgRating: 3.5 },
        { id: 'ac-2000', name: 'low voltage reactor', avgRating: 3.9 },
        { id: 'jj-1969', name: 'warp equalizer', avgRating: 5.0 }
    ];

    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    } else {
        console.error("The 'productName' select element was not found.");
    }

    // Display last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("The 'lastModified' element was not found.");
    }
});
