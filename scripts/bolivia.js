document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // °C
    const windSpeed = 5; // km/h
    const windChillElement = document.getElementById('windchill');

    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? 
               (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + ' °C' : 
               'N/A';
    }

    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
