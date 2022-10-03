const api_key = import.meta.env.VITE_API_KEY

/**
 * 
 * @param {int} page page to call
 * @param {Object} filterObject  this should contain the filters that can be applied on the api call. Better to provide the filter state object
 * @param {AbortController} signal for aborting the fetch request
 * @returns movie data
 */
export const fetchTopMovies = async(page=1,filterObject,signal,defaultPage=false)=>{
  // const language_query = with_original_language?`&with_original_language=${with_original_language}`:""
    let language_query=""
    for(let i in filterObject){
      if(filterObject[i]!==null & filterObject[i]!==""){
        language_query+=`&${i}=${filterObject[i]}`
      }
    } 
    defaultPage?page=1:page=page;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${page}`+language_query;
    let response = await fetch(url, { 
      method: "GET",
      signal:signal
    });
      console.log("🚀 ~ file: networkCall.js ~ line 13 ~ fetchTopMovies ~ language_query", url)
       
       let data = await response.json();
       return data
}