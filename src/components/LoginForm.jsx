import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions";
import styles from "../styles/LoginForm.module.css";

function LoginForm({ login }) {
  const [userInfo, seUserInfo] = useState({
    name: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    login(userInfo.name, userInfo.password);
    seUserInfo({
      name: "",
      password: "",
    });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    seUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  return (
    <div className={styles.container}>
      <h1>Authentication App</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={userInfo.name}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={userInfo.password}
          />
        </div>
        <button className={styles.btn}>Login</button>
      </form>
    </div>
  );
}
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
