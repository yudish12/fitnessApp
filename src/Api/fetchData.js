export const ExerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '10e96219acmsh9d33565e1e09d0dp1d5ed7jsn82dd488e67aa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '10e96219acmsh9d33565e1e09d0dp1d5ed7jsn82dd488e67aa',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async(url,options)=>{
  try {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
    
}