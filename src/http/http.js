import axios from "axios";


export const http= axios.create({
    baseURL: `https://portfolio-t061.onrender.com/` ,
    headers: {
        'admintoken' : localStorage.getItem("admintoken") ? localStorage.getItem("admintoken") : null,
         'user-token' : localStorage.getItem("user-token")? localStorage.getItem('user-token') :  null
    }
})

// https://portfolio-backend-adal.onrender.com/api/   rander api

