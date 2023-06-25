const temperature=document.querySelector(".weather1");
const city=document.querySelector(".weather2 p");
const date=document.querySelector(".weather2 span");
const emoji=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");
form.addEventListener("submit",search);


let loc=" New Delhi";

const fetchData=async(loc)=>{

    try {
        const url=`https://api.weatherapi.com/v1/current.json?key=9f009296e23e43a9be381620232506&q=${loc}`;
        const response= await fetch(url);
        const data=await response.json();
        const {current:{temp_c,condition:{text,icon},},location:{name,localtime},}=data;
    
    updateData(temp_c,name,icon,text,localtime)
    } catch (error) {
        alert("location not found");
    }

}
fetchData(loc);

const updateData=(temp,location,icon,text,time)=>{
    const exactDate=time.split(" ")[0];
    const exactTime=time.split(" ")[1];
    const exactDay=day(new Date(exactDate).getDay());
    
    temperature.innerText=`${temp}°`;
    city.innerText=location;

    emoji.src=icon;
    weatherField.innerText=text;
    date.innerText=`${exactTime} - ${exactDay} ${exactDate} `;

}

function search(e){
    e.preventDefault();
    loc=searchField.value;
    fetchData(loc);
}


const day=(num)=>{
    switch (num) {
        case 0:
            return "Sunday"
            break;
        
          case 1:
            return "Monday"
            break;
          case 2:
            return "Tuesday"
            break;
          case 3:
            return "Wednesday"
            break;
          case 4:
            return "Thursday"
            break;
          case 5:
            return "Friday"
            break;
          case 6:
            return "Saturday"
            break;
        
        default:
            break;
    }
}