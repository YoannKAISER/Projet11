import React from 'react';
import SignInForm from '../Components/SignInForm';
import Header from '../Layout/Header/Header';



function SignIn({alt, title}) {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className='sign-in-content'>
          <i className="fa fa-user-circle" alt="icone" />
          <h1>Sign In</h1>
          <SignInForm
            formAccount="Username"
            formPassword="Password"
            tickText="Remember me"
            textButton="Sign In"
          />
        </section>
      </main>
    </>
  );
}

export default SignIn;