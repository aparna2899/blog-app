import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between py-4 px-44">
      <Link to="/" className="flex-1 text-2xl font-bold text-green font-Roboto">
        conduit
      </Link>
      <nav className="flex-1 text-right">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/login" className="mx-3">
          Sign in
        </Link>
        <Link to="/register" className="mx-3">
          Sign up
        </Link>
        <Link to="/new" className="mx-3">
          New Article
        </Link>
      </nav>
    </div>
  );
}

export default Header;
