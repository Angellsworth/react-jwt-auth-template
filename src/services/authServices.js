// src/services/authService.js

// Use the `VITE_BACK_END_SERVER_URL` environment variable to set the base URL.
// Note the `/auth` path added to the server URL that forms the base URL for
// all the requests in this service.
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

//define service function and recieve formData
//import to signupform component and modify handleSubmit
const signUp = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })

        const data = await res.json()

        if(data.error) {
            throw new Error(data.error)
        }
        if(data.token) {
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload
        }

        throw new Error('Invalid response from server')

    } catch (error) {
        console.error(error)
    }
}

const signIn = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        const data = await res.json();

        if(data.error) {
            throw new Error(data.error)
        }

        if (data.token) {
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload;
          }

        throw new Error('Invalid response from server')
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export { signUp, signIn}
