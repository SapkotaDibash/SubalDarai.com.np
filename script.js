
function theme(webTheme = "") {
    let saved_webTheme = ""
    if (webTheme.length == 0) {
        // @ts-ignore
        saved_webTheme = JSON.parse(localStorage.getItem('webTheme'));
    }
    else {
        saved_webTheme = JSON.parse(webTheme);
        localStorage.setItem('webTheme', webTheme);
    }

    let keys = Object.keys(saved_webTheme);
    for (let i = 0; i < keys.length; i++) {
        // @ts-ignore
        document.documentElement.style.setProperty(keys[i], saved_webTheme[keys[i]]);

        // console.log(saved_webTheme[keys])
        // console.log(saved_webTheme)
        // console.log(keys)
    }

}
window.onload = theme();