import axios from "axios";

export  const Instance = axios.create({
    baseURL:'http://localhost:8800/api/',
    headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FhZmM4NjkxMDViZTdjOWNmNjNhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQzMDU1MiwiZXhwIjoxNjM4MDIyNTUyfQ.Cv7VrVN6BvyDvQGvI5p2WUrvBX468GBb5cHUvRlQm60"
    }


})