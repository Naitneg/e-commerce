import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/signup";

function Authentication() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "900px",
        margin: "30px auto",
      }}
    >
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
