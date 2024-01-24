import LOGO from '../../Icones/argentBankLogo.png';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../Redux';
import { NavLink } from 'react-router-dom';

function NavigationHeader({ name }) {
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LOGO}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="userNameDiv">
        <i className="fa fa-user-circle"></i>
        <p className="main-nav-item unclikable">{name}</p>
        <NavLink
          className="main-nav-item"
          to="/sign-in"
          onClick={() => {
            dispatch(resetUser());
          }}>
          Sign out
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationHeader;