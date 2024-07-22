// const userTab=document.querySelector("[data-userweather]")
// const searchTab=document.querySelector("[date-srchweather]");
// const userContainer=document.querySelector(".Weather container");

// const grantAccessContainer=document.querySelector(".grant-location-container");
// const loadingScreen=document.querySelector(".loading-container")
// const searchForm=document.querySelector("[data-searchform]")
// const userInfoContainer=document.querySelector(".user-InfoContainer");


// let oldTab = userTab;
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab")
// getfromSessionStorage();


// function switchTab(clickedTab){
//     if(clickedTab!=oldTab){
//         oldTab.classList.remove("current-tab");
//         oldTab=clickedTab;
//         oldTab.classList.add("current-tab")


//         if(!searchForm.classList.contains("active")){
//             userInfoContainer.classList.remove("active")
//             grantAccessContainer.classList.remove("active")
//             searchForm.classList.add("active")
//         }
//         else{
//             searchTab.classList.remove("active")
//             userInfoContainer.classList.remove("active");
//             getfromSessionStorage();
//         }
//     }
// }


// userTab.addEventListener("click",()=>{
//     switchTab(userTab);
// })
// searchTab.addEventListener("click",()=>{
//     switchTab(searchTab);
// })



// function getfromSessionStorage(){
//     const localCoordinates=sessionStorage.getItem("user-coordinates");

// if(!localCoordinates){
//     grantAccessContainer.classList.add("active");
// }
// else{
//     const coordinates=JSON.parse(localCoordinates)
//     fetchUserWeatherInfo(coordinates);

// }
// }



// async function fetchUserWeatherInfo(coordinates){
//     const {lat,lon}=coordinates;
//     grantAccessContainer.classList.remove("active");
//     loadingScreen.classList.add("active")


//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//           );
//           const data=await response.json();
//           loadingScreen.classList.remove("active");
//           userContainer.classList.add("active");
//           renderWeatherInfo(data);

//     }
//     catch (err){
//         loadingScreen.classList.remove("active")

//     }

// }

// function renderWeatherInfo(weatherInfo){
//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryImage]");
//     const desc = document.querySelector("[data-weatherDisc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temprature]");
//     const windspeed = document.querySelector("[data-WindSpeed]");
//     const humidity = document.querySelector("[data-Humidity]");
//     const cloudiness = document.querySelector("[data-Coludiness]");

//     console.log(weatherInfo);

//     cityName.innerText=weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherInfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
// }


// const grantAccess=document.querySelector("[data-grantAccess]")

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)

//     }
//     else{
//         alert("NO geolocation Support Available")
//     }
// }


// function showPosition(position) {

//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);

// }


// grantAccess.addEventListener('click',getLocation)



// let searchInput=document.querySelector("[data-searchInputSS]");
// searchInput.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let cityName=searchInput.ariaValueMax;
//     if(cityName === ""){
//         return;
//     }else{
    
//     fetchSearchWeatherInfo(cityName);
//     }



// })

    
// async function fetchSearchWeatherInfo(cityName){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");


//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//           );
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);

//     }
//     catch (err){


//     }

// }
 










// const userTab = document.querySelector("[data-userweather]");
// const searchTab = document.querySelector("[data-srchweather]");
// const userContainer = document.querySelector(".Weather.container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const loadingScreen = document.querySelector(".loading-container");
// const searchForm = document.querySelector("[data-searchform]");
// const userInfoContainer = document.querySelector(".user-InfoContainer");

// let oldTab = userTab;
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();

// function switchTab(clickedTab) {
//   if (clickedTab != oldTab) {
//     oldTab.classList.remove("current-tab");
//     oldTab = clickedTab;
//     oldTab.classList.add("current-tab");

//     if (!searchForm.classList.contains("active")) {
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       searchTab.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       getfromSessionStorage();
//     }
//   }
// }

// userTab.addEventListener("click", () => {
//   switchTab(userTab);
// });

// document.addEventListener("click", (event) => {
//     if (event.target.matches("[date-srchweather]")) {
//       switchTab(searchTab);
//     }
//   });
  

// function getfromSessionStorage() {
//   const localCoordinates = sessionStorage.getItem("user-coordinates");

//   if (!localCoordinates) {
//     grantAccessContainer.classList.add("active");
//   } else {
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates) {
//   const { lat, lon } = coordinates;
//   grantAccessContainer.classList.remove("active");
//   loadingScreen.classList.add("active");

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//   }
// }

// function renderWeatherInfo(weatherInfo) {
//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryImage]");
//   const desc = document.querySelector("[data-weatherDisc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temprature]");
//   const windspeed = document.querySelector("[data-WindSpeed]");
//   const humidity = document.querySelector("[data-Humidity]");
//   const cloudiness = document.querySelector("[data-Coludiness]");

//   console.log(weatherInfo);

//   cityName.innerText = weatherInfo?.name;
//   countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = `${weatherInfo?.main?.temp} °C`;
//   windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//   humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//   cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
// }

// const grantAccess = document.querySelector("[data-grantAccess]");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("NO geolocation Support Available");
//   }
// }

// function showPosition(position) {
//   const userCoordinates = {
//     lat: position.coords.latitude,
//     lon: position.coords.longitude,
//   };

//   sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//   fetchUserWeatherInfo(userCoordinates);
// }

// grantAccess.addEventListener('click', getLocation);

// let searchInput = document.querySelector("[data-searchInputSS]");
// searchInput.addEventListener('click', (e) => {
//   e.preventDefault();
//   let cityName = searchInput.value; // Fixed variable name
//   if (cityName === "") {
//     return;
//   } else {
//     fetchSearchWeatherInfo(cityName);
//   }
// });

// async function fetchSearchWeatherInfo(cityName) {
//   loadingScreen.classList.add("active");
//   userInfoContainer.classList.remove("active");
//   grantAccessContainer.classList.remove("active");

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//   }
// }








const userTab = document.querySelector("[data-userweather]");
const searchTab = document.querySelector("[date-srchweather]");
const userContainer = document.querySelector(".Weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchform]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-InfoContainer");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});





//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryicon]");
    const desc = document.querySelector("[data-weatherDisc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temprature]");
    const windspeed = document.querySelector("[data-WindSpeed]");
    const humidity = document.querySelector("[data-Humidity]");
    const cloudiness = document.querySelector("[data-Coludiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInputSS]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}