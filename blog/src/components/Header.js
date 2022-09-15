import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between py-4 px-48 shadow-md">
      <div className="flex-1 text-2xl font-bold text-green">conduit</div>
      <nav className="flex-1 text-right">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/signin" className="mx-3">
          Sign in
        </Link>
        <Link to="/signup" className="mx-3">
          Sign up
        </Link>
      </nav>
    </div>
  );
}

export default Header;
