let themeSelectors = document.querySelectorAll(".toggle");
let themeStyle = document.getElementById("choose-theme");
let localTheme = "1";

themeSelectors.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    e.preventDefault();
    selectTheme(theme.value);
  });
});

const selectTheme = (theme) => {
  if (theme === "1") {
    themeStyle.setAttribute("href", "");
    localStorage.setItem("theme", "1");
  } else {
    themeStyle.setAttribute("href", `css/theme-${theme}.css`);
    localStorage.setItem("theme", `${theme}`);
  }
};

const setLocalTheme = () => {
  localTheme = localStorage.getItem("theme");
  if (localTheme !== undefined) {
    switch (localTheme) {
      case "1":
        themeStyle.setAttribute("href", "");
        break;
      case "2":
      case "3":
        themeStyle.setAttribute("href", `css/theme-${localTheme}.css`);
        break;
      default:
        windowsTheme();
        break;
    }
  }
};

const windowsTheme = () => {
  const lighT = window.matchMedia("(prefers-color-scheme: light)").matches;
  const darkT = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (lighT) {
    themeStyle.setAttribute("href", "css/theme-2.css");
  } else if (darkT) {
    themeStyle.setAttribute("href", "css/theme-3.css");
  } else {
    themeStyle.setAttribute("href", "");
  }
};

setLocalTheme();
