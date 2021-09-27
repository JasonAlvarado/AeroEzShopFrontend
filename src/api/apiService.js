import axios from 'axios';
// import {authProvider} from "../auth"

export const BASE_URL = "";

export async function get(endpoint, auth = null, extraHeaders = null) {
    const headers = await getHeaders();

    // if (extraHeaders) {
    //     headers = Object.assign(extraHeaders, headers);
    // }

    return axios.get(BASE_URL + endpoint, { headers });
}

export async function put(endpoint, auth = null, body) {
    const headers = await getHeaders();
    return axios.put(BASE_URL + endpoint, body, { headers })
}


export async function post(endpoint, auth = null, body) {
    const headers = await getHeaders();
    return axios.put(BASE_URL + endpoint, body, { headers })
}

export async function getHeaders(auth) {
    let headers = {
        "content-type": "application/json",
        accept: "application/json"
    };

    // if (auth) {
    //     const token = authProvider.GetUserToken();
    //     headers = Object.assign({ Authorization: "Bearer" + token }, headers);
    // }

    return headers;
}

