import axios from 'axios';

const APP_URL = 'http://localhost:2000';
const responseBody = res => res.body;

const request = {
    get : url => {
        axios.get(`${APP_URL}/${url}`).then(responseBody)
    },
    post : (url, data) => {
        axios.post(`${APP_URL}/${url}`, data).then(responseBody)
    },
    delete: (url) => {
        axios.delete(`${APP_URL}/${url}`).then(responseBody)
    },
    put: (url, data) => {
        axios.put(`${APP_URL}/${url}`, data).then(responseBody)
    },
    patch: (url, data) => {
        axios.patch(`${APP_URL}/${url}`, data).then(responseBody)
    }
}

const Twilio = {
    Message : data => request.post('message', data),
    Call : data => request.post('call', data)
}

export default {
    Twilio
};