document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', themeToggle.checked);
    });

    // Initialize the theme based on user's previous choice or system preference
    const currentThemePreference = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentThemePreference === 'dark') {
        themeToggle.checked = true;
        body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', themeToggle.checked);
        // Save the user's preference in localStorage
        localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
    });
});
