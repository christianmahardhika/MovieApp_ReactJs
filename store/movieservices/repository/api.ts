import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export function customParams(params: any) {
    params['api_key'] = '95e87c5acbcfa3a1b0d4df3e1a73755b'
    params['language'] = 'en-US'
    return params
}