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
  const [tempUserName, setTempUserName] = useState(''); 
  const token = useSelector((state) => state.user.token); 
  const inputRef = useRef(null);

  useEffect(() => {
    setTempUserName(''); 
  }, [display]); 

  const handleChangeUserName = (event) => {
    setTempUserName(event.target.value); 
  };

  const handleClickSave = async () => {
    try {
      await putChangeUserName(token, tempUserName); 
      dispatch(saveUserName(tempUserName)); 
      navigate(`/profile`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur :", error);
      // Gérer l'erreur
    }
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
          <button type="button" onClick={handleClickSave}>{saveButton}</button>
        </div>
      </form>
    </div>
  );
}

export default EditUserName;
