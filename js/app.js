//
// State
//

//
// Hooks
//

//
// Utilities
//

function toggle_attribute(element, attribute)
{
    if (!element.hasAttribute(attribute))
    {
        element.setAttribute(attribute, "");
    }
    else
    {
        element.removeAttribute(attribute);
    }
}

//
// Menus
//

function toggle_player_list() {
    const player_list = document.getElementById("player-list");

    toggle_attribute(player_list, "open");
}

function toggle_menu() {
    const menu = document.getElementById("menu-sidebar");



    toggle_attribute(menu, "open");
}

//
// Theme
//

function setTheme(theme_name)
{
    document.body.setAttribute("theme", theme_name);
}

document.addEventListener("DOMContentLoaded", function() {
    const detectColorScheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('User prefers dark mode');
        } else {
            console.log('User prefers light mode');
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('User prefers dark mode');
        setTheme("dark");
    } else {
        console.log('User prefers light mode');
        setTheme("light");
    }
});