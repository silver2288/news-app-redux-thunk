import axios from "axios";

export default async function getNews(id) {
  return axios.get(`http://localhost:3000/newsByType-${id}`).catch(error => {
    console.log(error);
  });
}
