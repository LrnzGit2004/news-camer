export const fetchNewsFromCameroon = async () => {
  // const apiKey = import.meta.env.API_KEY_NEWS_CM; A vérifier !
  const url = `https://newsdata.io/api/1/news?apikey=pub_62415f043c51a0e3fc1a554f48450951e8105&category=&country=cm&language=fr,en`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; // Contient la liste des articles
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }

};



