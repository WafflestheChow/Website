document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const lightModeIcons = document.querySelectorAll('.light-mode-icon');
    const darkModeIcons = document.querySelectorAll('.dark-mode-icon');

    // Set the initial theme on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        lightModeIcons.forEach(icon => icon.style.display = 'none');
        darkModeIcons.forEach(icon => icon.style.display = 'block');
    }

    // Toggle the theme and icons on clicking the switch
    themeToggle.addEventListener('change', () => {
        if (document.body.classList.toggle('dark-mode')) {
            lightModeIcons.forEach(icon => icon.style.display = 'none');
            darkModeIcons.forEach(icon => icon.style.display = 'block');
            localStorage.setItem('theme', 'dark');
        } else {
            lightModeIcons.forEach(icon => icon.style.display = 'block');
            darkModeIcons.forEach(icon => icon.style.display = 'none');
            localStorage.setItem('theme', 'light');
        }
    });
});
