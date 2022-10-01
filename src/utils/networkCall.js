const api_key = import.meta.env.VITE_API_KEY

export const fetchTopMovies = async({page=1,with_original_language="",language=""})=>{
    const language_query = with_original_language?`&with_original_language=${with_original_language}`:""
    const dub_query = language?`&language=${language}`:""
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${page}`+language_query+dub_query;
       let response = await fetch(url, { 
         method: "GET",
       });
       
       let data = await response.json();
       return data
}