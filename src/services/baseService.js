import axios from "axios";
import { DOMAIN,TOKEN } from "../util/Setting/config";


export const put = (url, model) => {
  return axios({
    url: `${DOMAIN}/${url}`,
    method: "PUT",
    data: model,
    headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN).replace(/"/g, '') },
  });
};

export const post = (url, model) => {
  console.log(`${DOMAIN}/${url}`);
  return axios({
    url: `${DOMAIN}/${url}`,
    method: "POST",
    data: model,
    headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN).replace(/"/g, '')},
  });
};

export const postUser = (url, model) => {

  return axios({
    url: `${DOMAIN}/${url}`,
    method: "POST",
    data: model,
    headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN)},
  });
};

export const get = (url) => {
  return axios({
    url: `${DOMAIN}/${url}`,
    method: "GET",
    headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN).replace(/"/g, '') },
  });
};

export const deleteItem = (url) => {
  return axios({
    url: `${DOMAIN}/${url}`,
    method: "DELETE",
    headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN).replace(/"/g, '') },
  });
};
