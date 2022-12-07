import axios from "axios";

export const getApiresourse = async () => {
  try {
    const response = await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eaa401e923f84e22e53bd745f7ee71a3&hash=4efc4f2691084f932387b6e7680f2333");
    console.log(response.data.data);    
  } catch (error) {
    return false;
  }
}