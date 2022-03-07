let themeSelectors = document.querySelectorAll(".toggle");
let themeStyle = document.getElementById("choose-theme");


themeSelectors.forEach(theme => {
    theme.addEventListener("click", (e) => {
        e.preventDefault();
        selectTheme(theme.value);
    });
});


const selectTheme = (theme) => {
    if (theme === "1"){
        themeStyle.setAttribute('href', '');
    } else {
        themeStyle.setAttribute('href', `css/theme-${theme}.css`)
    }
}
