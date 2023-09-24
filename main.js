let darkThemeBtn = document.getElementById("to_dark_theme");
let lightThemeBtn = document.getElementById("to_light_theme");

let theme = localStorage.getItem("theme");

if(theme === "dark__theme"){
    applydarktheme();       
}else {
    applylighttheme();
}



function applydarktheme(){
    document.body.classList.remove("light__theme");
    document.body.classList.add("dark__theme");
    darkThemeBtn.style.display="none";
    lightThemeBtn.style.display = "grid";
    localStorage.setItem("theme",'dark__theme');
}
function applylighttheme(){
    document.body.classList.remove("dark__theme");
    document.body.classList.add("light__theme");
    document.body.classList.add("light__theme__transition");
    darkThemeBtn.style.display="grid"
    lightThemeBtn.style.display = "none";
    localStorage.setItem("theme","light__theme");
}


darkThemeBtn.addEventListener('click',()=>{
    applydarktheme();
})

lightThemeBtn.addEventListener('click',()=>{
    applylighttheme();
})

