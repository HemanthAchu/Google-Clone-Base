

export const API_KEY = import.meta.env.VITE_REACT_APP_API_URL
export const ENGINE_ID = import.meta.env.VITE_REACT_APP_ENGINE_ID

console.log(`engine:${import.meta.env.VITE_REACT_APP_ENGINE_ID}`);
console.log(`API:${import.meta.env.VITE_REACT_APP_API_URL}`);

export const GoogleSearch = async (team)=>{
 const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${team}`)
 const result =data.json()
 return result;
}































// In a file like config.js


// In another file where you use the API key and engine ID
// src/API/Googlesearch.js

// export const searchData = async (team) => {
//     const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_ENGINE_ID}&q=${team}`;
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log('data:', data);
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
// import axios from 'axios';

// export const GoogleSearch = async (term) => {
//   const { data } = await axios.get(
//     'https://www.googleapis.com/customsearch/v1',
//     {
//       params: {
//         key: import.meta.env.VITE_REACT_APP_API_URL,
//         cx: import.meta.env.VITE_REACT_APP_API_URL,
//         q: term,
//       },
//     }
//   );

//   return data;
//};