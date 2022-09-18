import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      errors: {
        password: '',
        email: '',
      },
    };
  }

  validateEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Invalid email!';
        break;
      case 'password':
        errors.password =
          value.length < 6 ? 'Password must be of atleast 6 characters' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = () => {
    alert(`Registeration Successful!`);
  };

  render() {
    let { email, password } = this.state.errors;
    return (
      <>
        <h1 className="text-4xl text-center mt-8">Sign Up</h1>
        <form className="my-6 w-2/6 mx-auto">
          <input
            type="text"
            placeholder="Email"
            className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <span className="text-red-500 text-sm ml-2 mt-1 mb-3 block">
            {email}
          </span>
          <input
            type="password"
            placeholder="Password"
            className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <span className="text-red-500 text-sm ml-2">{password}</span>
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
}

export default Register;
