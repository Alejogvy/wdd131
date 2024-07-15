document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    } else {
        console.error("The 'reviewCount' element was not found.");
    }

    // Display last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("The 'lastModified' element was not found.");
    }
});
