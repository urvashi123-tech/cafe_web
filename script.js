let eat=document.querySelector("#eat1")
let drink=document.querySelector("#drink1")
let display_eat=document.querySelector("#eat_menu")
let display_drink=document.querySelector("#drink_menu")
eat.addEventListener("click",()=>{
    eat.style.color="black"
    eat.style.backgroundColor="white";
    display_eat.style.display="block"
    display_drink.style.display="none"
})
drink.addEventListener("click",()=>{
    drink.style.color="black"
    drink.style.backgroundColor="white";
    display_drink.style.display="block"
    display_eat.style.display="none"
})