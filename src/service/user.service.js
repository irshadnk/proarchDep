import { authHeader } from '../helpers';
//import {config} from '../config'
const config = {
    apiUrl: 'http://localhost:3002'
};


function handleResponse(response) {
	console.log('response', response)
    // return authorization header with jwt token
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401 || response.status === 403 ) {
                //auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log('for response', data)
        return data;
    });
}

function logout() {
  window.localStorage.clear();
}

const registeruser = (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  return fetch(`${config.apiUrl}/register`, requestOptions).then(handleResponse);
};

const login = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${config.apiUrl}/login`, requestOptions).then(handleResponse);
};

function getSkillsandCountry() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`${config.apiUrl}/getSkillsandCountry`, requestOptions).then(handleResponse);
}

export default {   registeruser, login, getSkillsandCountry };
