import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";

import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { Context as AuthContext } from "../context/authContext";

const Login = () => {
  const history = useHistory();

  const { state, fetchUser } = useContext(AuthContext);
  console.log("login js", state);

  const responseFacebook = async (response) => {
    fetchUser(response);

    const { name, email, userID, id } = response;
    const body = {
      name,
      email,
      userID,
      id,
    };
    // await axios.post("/api/v1/login", body);
  };

 

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h1>Facebook Help Desk</h1>

      {state ? (
        <div>
          <Button primary onClick={() => history.push("/helpdesk")}>
            Visit Helpdesk
          </Button>
        </div>
      ) : (
        <div>
          <h3>Please login through facebook to use our application.</h3>
          <FacebookLogin
            appId="561869858149468"
            autoLoad={false}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
