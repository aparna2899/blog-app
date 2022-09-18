import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <>
      <h1 className="text-4xl text-center mt-8">Sign Up</h1>
      <form className="my-6 w-2/6 mx-auto">
        <input
          type="text"
          placeholder="Email"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
        />
      </form>
      <button
        type="submit"
        className=" bg-green hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto"
      >
        Sign up
      </button>
      <Link to="/login" className="block text-center text-green mt-8">
        Already have an account? Sign in
      </Link>
    </>
  );
}

export default Register;
