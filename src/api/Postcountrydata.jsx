import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});

export const getcountrydata = () =>{
    return api.get("/all?fields=name,population,ragion,capital,flags")
} 
export const getcountryinddata = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tid,currencirs,languages,borders,flags`)
} 

