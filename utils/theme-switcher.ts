export const setTheme = () => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const nextTheme = bodyElement.classList.contains("dark") ? "light" : "dark";

    if (nextTheme == "light") {
        bodyElement.classList.remove("dark");
    } else {
        bodyElement.classList.add("dark");
    }

    localStorage.setItem("theme", nextTheme);
    console.log("[log]: theme changed to", nextTheme);
};

export const loadTheme = () => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const savedTheme = localStorage.getItem("theme") ?? "light";

    if (savedTheme == "light") {
        bodyElement.classList.remove("dark");
    } else {
        bodyElement.classList.add("dark");
    }

    console.log(`[log]: ${savedTheme} theme loaded`);
};
