import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store';

export default function LoginButton() {
  const dispatch = useDispatch();

  return (
    <Link to="/user">
      <button
        type="button"
        className="sign-in-button"
        onClick={() => {
          dispatch(login());
        }}
      >
        Sign In
      </button>
    </Link>
  );
}
