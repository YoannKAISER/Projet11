import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFirstName, getLastName, getToken, getUserName } from '../API'; 
import { saveFirstName, saveLastName, saveToken, saveUserName } from '../Redux';
import signInError from '../Components/signinError';


function SignInForm({
    formAccount, 
    formPassword, 
    tickText, 
    textButton, 
}) {
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 



    async function handleClick(event) {
        event.preventDefault(); 
        try {
            const token = await getToken(email, password);
            const userName = await getUserName(token);
            const firstName = await getFirstName(token);
            const lastName = await getLastName(token);

            dispatch(saveToken(token));
            dispatch(saveUserName(userName));
            dispatch(saveFirstName(firstName));
            dispatch(saveLastName(lastName));
           
            navigate(`/user/${userName}`);
        } catch (error) {

            signInError();
            console.log('Email ou mot de passe incorrect', error);
        }
    }

    return(
        <form>
            <div className="input-wrapper">
                <label htmlFor="email">{formAccount}</label>
                <input
                    type="text"
                    id="email"
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete='on' />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">{formPassword}</label>
                <input
                    type="password"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete='on' />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">{tickText}</label>
            </div>
            <button type="submit" className="sign-in-button" onClick={handleClick}>
                {textButton}
            </button>
        </form>
    )
};

export default SignInForm;