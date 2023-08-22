import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY5MjY5OTIxNCwiZXhwIjoxNjkyNzAyODE0LCJuYmYiOjE2OTI2OTkyMTQsImp0aSI6InZLYVppWmdpcFBtTFd0NE8iLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ixBWiPq9uQJiTaRXZcgjMHxZHY8yFLkTq45eFLYD4z8',
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    },
})