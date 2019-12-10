import axios from 'axios';

export async function getUser(){
    return axios.get("https://randomuser.me/api");
}