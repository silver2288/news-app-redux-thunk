import axios from "axios";

export default async function getCategories() {
  return axios.get("http://localhost:3000/typesNews").catch(error => {
    console.log(error);
  });
}
