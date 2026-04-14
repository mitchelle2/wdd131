// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){
menuBtn.addEventListener("click",()=>{
navMenu.classList.toggle("open");
});
}


// DISH DATA
const foods = [

{name:"Jollof Rice", image:"images/jollof-rice.jpg"},
{name:"Suya", image:"images/suya.jpg"},
{name:"Grilled Fish", image:"images/grilledfish.jpg"},
{name:"Fried Plantain", image:"images/plantain.jpg"}

];


// RESTAURANTS
const restaurants = [

{name:"River Grill", specialty:"Grilled Fish", rating:3},
{name:"City Spice Kitchen", specialty:"Jollof Rice", rating:5},
{name:"Suya Palace", specialty:"Suya", rating:4},
{name:"Golden Bowl", specialty:"Rice Bowls", rating:4}

];


// YEAR
function displayYear(){

const year=document.getElementById("year");

if(year){
year.textContent=new Date().getFullYear();
}

}


// LAST MODIFIED
function displayLastModified(){

const mod=document.getElementById("lastModified");

if(mod){
mod.textContent=document.lastModified;
}

}


// SHOW RANDOM DISH + IMAGE
function showRandomFood(){

const result=document.getElementById("foodResult");

if(result){

const random=Math.floor(Math.random()*foods.length);

const dish=foods[random];

result.innerHTML=`

<h3>${dish.name}</h3>

<img src="${dish.image}" alt="${dish.name}" width="250">

`;

localStorage.setItem("favoriteDish",dish.name);

}

}


// DISH CARD POP OUT
const dishes=document.querySelectorAll(".dish-card");

dishes.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});


// DISPLAY RESTAURANTS
function displayRestaurants(list){

const container=document.getElementById("restaurantContainer");

if(container){

container.innerHTML="";

list.forEach(r=>{

const stars="⭐".repeat(Math.round(r.rating));

const card=document.createElement("div");

card.classList.add("restaurant-card");

card.innerHTML=`

<h3>${r.name}</h3>

<p>Specialty: ${r.specialty}</p>

<p>Rating: ${stars}</p>

<button class="saveFavBtn">Save Favorite</button>

`;

container.appendChild(card);

const saveBtn=card.querySelector(".saveFavBtn");

saveBtn.addEventListener("click",()=>{

localStorage.setItem("favoriteRestaurant",r.name);

alert("Saved as favorite!");

});

});

}

}


// FILTER TOP RATED
function showTopRated(){

const filtered=restaurants.filter(r=>r.rating>=4);

displayRestaurants(filtered);

}


// SHOW FAVORITE
function displayFavorite(){

const fav=document.getElementById("favoriteRestaurant");

if(fav){

const saved=localStorage.getItem("favoriteRestaurant");

if(saved){

fav.textContent=`Your favorite restaurant is ${saved}`;

}else{

fav.textContent="No favorite restaurant saved.";

}

}

}


// EVENTS
const foodBtn=document.getElementById("foodBtn");

if(foodBtn){
foodBtn.addEventListener("click",showRandomFood);
}

const topBtn=document.getElementById("topRatedBtn");

if(topBtn){
topBtn.addEventListener("click",showTopRated);
}

const favBtn=document.getElementById("showFavoriteBtn");

if(favBtn){
favBtn.addEventListener("click",displayFavorite);
}


// INIT
displayYear();
displayLastModified();
displayRestaurants(restaurants);
displayFavorite();