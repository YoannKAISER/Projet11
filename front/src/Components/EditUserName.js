import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { putChangeUserName } from '../API';
import { saveUserName } from '../Redux';


function EditUserName({
  formTitle, 
  saveButton, 
  display,
  firstName,
  lastName,
}) {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const [userName, setUserName] = useState(); 
  const [tempUserName, setTempUserName] = useState(userName); 
  const token = useSelector((state) => state.user.token); 
  const inputRef = useRef(null);

  
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleClickSave(); 
      }
    }

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown); 
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown); 
      }
    };
  }, [tempUserName]); 

  
  const handleChangeUserName = (event) => {
    setTempUserName(event.target.value); 
  };

  
  const handleClickSave = () => {
    putChangeUserName(token, tempUserName); 
    dispatch(saveUserName(tempUserName)); 
    setUserName('userName', tempUserName); 
    navigate(`/profile`);
  };

  
  
  return (
      <div className={display ? 'form-user' : 'form-user__hide'}>
        <h3>{formTitle}</h3>
        <form>
          <div>
            <label htmlFor="user_name">User name:</label>
            <input
              ref={inputRef}
              type="text"
              id="user_name"
              name="user_name"
              placeholder={tempUserName} 
              onChange={handleChangeUserName} />
          </div>
          <div>
            <label htmlFor="first_name">First name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder={firstName} 
              disabled={true} />
          </div>
          <div>
            <label htmlFor="last_name">Last name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder={lastName}
              disabled={true} />
          </div>
          <div className="buttons">
            <button onClick={handleClickSave}>{saveButton}</button>
          </div>
        </form>
      </div>
  );
};

export default EditUserName;