// Function to gather browser and system information
function gatherBrowserInfo() {
    return {
        'Navigator - appName': navigator.appName,
        'Navigator - product': navigator.product,
        'Navigator - appVersion': navigator.appVersion,
        'Navigator - userAgent': navigator.userAgent,
        'Navigator - platform': navigator.platform,
        'Navigator - language': navigator.language,
        'Window - innerHeight': window.innerHeight,
        'Window - innerWidth': window.innerWidth,
        'Screen - width': screen.width,
        'Screen - height': screen.height,
        'Screen - availWidth': screen.availWidth,
        'Screen - availHeight': screen.availHeight,
        'Screen - colorDepth': screen.colorDepth,
        'Screen - pixelDepth': screen.pixelDepth,
        'Location - href': location.href,
        'Location - hostname': location.hostname,
        'Location - pathname': location.pathname,
        'Location - protocol': location.protocol,
        // 'Geolocation - Latitude': '', // To be populated by the geolocation function
        // 'Geolocation - Longitude': '' // To be populated by the geolocation function
    };
}

// Function to display the browser information
function displayBrowserInfo(info) {
    const browserInfoElement = document.getElementById('browserDropdown');
    if (browserInfoElement) {
        browserInfoElement.innerHTML = ''; // Clear existing content
        Object.keys(info).forEach(key => {
            const infoItem = document.createElement('li');
            infoItem.textContent = `${key}: ${info[key]}`;
            browserInfoElement.appendChild(infoItem);
        });
    }
}

// Function to get and display the geolocation information
function displayGeolocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const browserInfoElement = document.getElementById('browserDropdown');
            if (browserInfoElement) {
                const latitudeItem = document.createElement('li');
                latitudeItem.textContent = `Geolocation - Latitude: ${position.coords.latitude}`;
                browserInfoElement.appendChild(latitudeItem);

                const longitudeItem = document.createElement('li');
                longitudeItem.textContent = `Geolocation - Longitude: ${position.coords.longitude}`;
                browserInfoElement.appendChild(longitudeItem);
            }
        }, function(error) {
            console.error("Geolocation error: ", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// When the window finishes loading, display the browser and geolocation information
window.addEventListener('DOMContentLoaded', (event) => {
    const browserInfo = gatherBrowserInfo();
    displayBrowserInfo(browserInfo);
    displayGeolocation();
});


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});
