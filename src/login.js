import { useState } from "react";
import { useHistory } from "react-router-dom";
import './CSS/Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // create a history object

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic here with firebase
    history.push("/authhome"); // navigate to AuthHome
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
