import {domain} from './api';
import {AsyncStorage} from 'react-native'
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
     'credentials': 'include'
});

function get (url) {
    return fetch(domain+url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function post (url, data) {
    return fetch(domain+url, {
        method: 'POST',
        headers: headers,
        body:data
    }).then(response => {
        return handleResponse(domain+url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}
function fectPost(url,data){
     return fetch(domain+url, {
         method: 'POST',
         headers: headers,
         body:data
     }).then(response => {
         return handleResponse(domain+url, response);
     }).catch(err => {
         console.error(`Request failed. Url = ${url} . Message = ${err}`);
         return {error: {message: 'Request failed.'}};
     })
}
function put (url, data) {
    return fetch(data+url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function handleResponse (url, response) {
    if (response.status < 500) {
        return response.json();
    } else {
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        return {error: {message: 'Request failed due to server error '}};
    }
}
export {get, post, put,fectPost}