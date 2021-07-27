import {baseUrl} from '../configuration'

export const validateUser = async (email, password) => {
    const URL = `${baseUrl}/auth/login`;
    const requestOptions = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    };
    console.log(requestOptions.body)
    return await fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((resData) => {
        if(resData.token) {
            const token = resData.token;
            window.sessionStorage.setItem('sarangcv', JSON.stringify(token));
        }
        return resData;
    })


//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "email": "shirag@gmail.com",
//   "password": "123456"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:3000/auth/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

}