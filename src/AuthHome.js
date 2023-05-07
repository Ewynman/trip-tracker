import AuthNavbar from "./AuthNavBar";

const AuthHome = () => {
  return (
    <div>
      <AuthNavbar />
      <h1>Welcome to the authenticated home page!</h1>
      <p>You are now logged in.</p>
    </div>
  );
};

export default AuthHome;
