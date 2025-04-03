import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signIn } from '../../services/authServices';
import { UserContext } from '../../contexts/UserContext';

const SignInForm = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        setMessage(''),
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const signedInUser = await signIn(formData)

            setUser(signedInUser)
            navigate('/')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return (
        <main>
            <h1>Sign In</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                      type='text'
                      autoComplete='off'
                      id='username'
                      value={formData.username}
                      name='username'
                      onChange={handleChange}
                      required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type='password'
                        autoComplete='off'
                        id='password'
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button onClick={() => navigate('/')} >Cancel</button>
                    <button>Sign In</button>
                </div>
            </form>
        </main>
    )
}

export default SignInForm;