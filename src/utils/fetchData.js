export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c2d9cf5ebmsh3df98969ce69409p10219bjsn4651daf174e0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c2d9cf5ebmsh3df98969ce69409p10219bjsn4651daf174e0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
// console.log(process.env.REACT_RAPID_API_KEY)

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
