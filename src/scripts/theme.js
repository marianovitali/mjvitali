const button = document.querySelector("#theme-toggle");

function updateIcon() {
    const isDark = document.documentElement.dataset.theme === "dark";
    const moonIcon = document.querySelector("#theme-icon-moon");
    const sunIcon = document.querySelector("#theme-icon-sun");

    if (moonIcon && sunIcon) {
        moonIcon.style.display = isDark ? "none" : "block";
        sunIcon.style.display = isDark ? "block" : "none";
    }
}


updateIcon();

button?.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);

    updateIcon();
});