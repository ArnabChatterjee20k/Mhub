const api_key = import.meta.env.VITE_API_KEY

export const fetchTopMovies = async(page)=>{
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${page || 1}`
       let response = await fetch(url, { 
         method: "GET",
       });
       
       let data = await response.json();
       return data
}