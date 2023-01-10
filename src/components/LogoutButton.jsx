import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store';

export default function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <Link
      className="main-nav-item"
      to="/"
      onClick={() => {
        dispatch(logout());
      }}
    >
      <i className="fa fa-sign-out" />
      Sign Out
    </Link>
  );
}
