import { logout } from "../redux/actions";
import { connect } from "react-redux";
import styles from "../styles/UserProfile.module.css";

function UserProfile({ userName, logout }) {
  function handleLogout() {
    logout();
  }

  return (
    <div className={styles.container}>
      <h1>Authentication App</h1>
      <h2>User Profile</h2>
      <p>Welcome,{userName}</p>
      <button onClick={handleLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: state.user.name,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
