import NavigationHeader from '../Layout/Header/NavigationHeader';
import Account from '../Components/Account';
import EditUserName from '../Components/EditUserName';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function User() {
  const [hideForm, setHideForm] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);


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
            userNameProps={userName}
            firstName={firstName}
            lastName={lastName}
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