import "./App.css";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";
import { connect } from "react-redux";

function App({ isAuthenticated }) {
  return (
    <div className="App">
      {isAuthenticated ? <UserProfile /> : <LoginForm />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App);
