
const srch= async (city)=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response=await fetch(url);
      const data= await response.json();
      return data;

    }
    catch(error){
      
    }
  }
  export default srch;