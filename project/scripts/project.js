// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){
menuBtn.addEventListener("click", ()=>{
navMenu.classList.toggle("open");
});
}


// ARRAY
const foods = ["Jollof Rice","Suya","Grilled Fish","Fried Plantain"];


// OBJECT
const restaurantExample = {
name:"River Grill",
specialty:"Grilled Fish",
rating:4
};


// RESTAURANT ARRAY
const restaurants = [

{name:"River Grill", specialty:"Grilled Fish", rating:3},
{name:"City Spice Kitchen", specialty:"Jollof Rice", rating:5},
{name:"Suya Palace", specialty:"Suya", rating:4},
{name:"Golden Bowl", specialty:"Rice Bowls", rating:4}

];


// DISPLAY YEAR
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


// SHOW RANDOM DISH
function showRandomFood(){

const result=document.getElementById("foodResult");

if(result){

const random=Math.floor(Math.random()*foods.length);

const dish=foods[random];

result.textContent=`Today's dish is ${dish}`;

localStorage.setItem("favoriteDish",dish);

}

}


// DISH POP OUT
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
const saveBtn = card.querySelector(".saveFavBtn");

saveBtn.addEventListener("click", () => {

localStorage.setItem("favoriteRestaurant", r.name);

});


// SAVE FAVORITE
card.addEventListener("click",()=>{

localStorage.setItem("favoriteRestaurant",r.name);

});

});

}

}


// SHOW TOP RATED
function showTopRated(){

const filtered=restaurants.filter(r=>r.rating>=4);

displayRestaurants(filtered);

}


// DISPLAY FAVORITE
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


// CONTACT FORM
function handleForm(){

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const message=document.getElementById("formMessage");

if(name.length>0){

message.textContent=`Thank you ${name}, your message has been received.`;

}

});

}

}


// ARRAY METHOD
foods.forEach(food=>console.log(food));


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


// INITIALIZE
displayYear();
displayLastModified();
displayRestaurants(restaurants);
displayFavorite();
handleForm();