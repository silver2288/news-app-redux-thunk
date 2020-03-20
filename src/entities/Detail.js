import axios from "axios";

export default async function getDetail(id, newsid) {
  return axios
    .get(`http://localhost:3000/newsByType-${id}-${newsid}`)
    .catch(error => {
      console.log(error);
    });
}
