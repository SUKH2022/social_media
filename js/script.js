var settingsmenu= document.querySelector(".settings_menu");
var darkbtn=document.getElementById("dark_btn")


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings_menu_height")
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark_btn_on")
    document.body.classList.toggle("dark_theme")
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark_btn_on")
    document.body.classList.remove("dark_theme")
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark_btn_on")
    document.body.classList.add("dark_theme")
}
//it means i have make the local storage with the name theme and the value is light
//localStorage.setItem("theme","dark");
// give the value which is store in the theme
//localStorage.getItem("theme");
else{
    localStorage.setItem("theme","light");
}