import axios from "axios";

// https://portfolio-t061.onrender.com/

export const http= axios.create({
    baseURL: `http://localhost:3000` ,
    headers: {
        'admintoken' : localStorage.getItem("admintoken") ? localStorage.getItem("admintoken") : null,
         'user-token' : localStorage.getItem("user-token")? localStorage.getItem('user-token') :  null,
         'Access-Control-Allow-Origin' :'*'
    }
})

export const path = `http://localhost:3000/`
// https://portfolio-backend-adal.onrender.com/api/   rander api
