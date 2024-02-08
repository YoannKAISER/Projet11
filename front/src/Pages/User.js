import NavigationHeader from '../Layout/Header/NavigationHeader';
import Account from '../Components/Account';
import EditUserName from '../Components/EditUserName';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from '../API'; 
import { saveFirstName, saveLastName, saveUserName } from '../Redux';
import { useDispatch } from 'react-redux';



function User() {
  const dispatch = useDispatch(); 
  const token = useSelector((state) => state.user.token);
  const [hideForm, setHideForm] = useState(false);
  const userName = useSelector((state) => state.user.userName);

  useEffect(() => { 
      fetchUserProfile(userName);
  }, [token, userName]);

  const fetchUserProfile = async (requestedUsername) => {
    try {
      const response = await getProfile(token, requestedUsername);
  
      if (response.status === 200 && response.body) {
        const { userName, firstName, lastName } = response.body;
  
        dispatch(saveUserName(userName));
        dispatch(saveFirstName(firstName));
        dispatch(saveLastName(lastName));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  
  const userData = useSelector((state) => state.user);
  

  return (
    <>
      <NavigationHeader name={userName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {userName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => setHideForm(!hideForm)}>
            Edit Name
          </button>
          <EditUserName
            formTitle="Edit user name"
            saveButton="save"
            display={hideForm}
            userNameProps={userData.userName}
            firstName={userData.firstName}
            lastName={userData.lastName}
          />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          button="View transactions"
        />
      </main>
    </>
  );
}

export default User;