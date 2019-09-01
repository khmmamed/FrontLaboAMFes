import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import LoginButton from "./components/Buttons/Button";
import UserNameInput from "./components/Inputs/Input";
import KeyWordInput from "./components/Inputs/Input";

//===> import dispatcher
import { loginUsername, loginPassword, logingetUser } from "../login/store/actions"

import Link from "./components/Links";

//import redux module
import { connect } from "react-redux";

const InputContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #6ace1e;
  margin-bottom: 35px;
  margin-top: ${props => props.top};
`;
const SubmitButtonConatiner = styled(Box)`
  width: 100%;
`;
const LoginForm = styled(Flex)`
  width: 100%;
`;

const Login = ({ userName, passWord, loginUsername, loginPassword, logingetUser}) => (
  <LoginForm>
    <InputContainer top={"50px"}>
      <UserNameInput
        placeholder="nom d'utilisateur"
        name="username"
        type="text"
        value={userName}
        onChange={e =>{ loginUsername(e.target.value)} }
        material
      />
    </InputContainer>
    <InputContainer top={"0px"}>
      <KeyWordInput
        placeholder="mot de passe"
        name="password"
        type="password"
        value={passWord}
        onChange={e => loginPassword(e.target.value) }
        material
      />
    </InputContainer>
    <SubmitButtonConatiner>
      <LoginButton
        text={"Entrer"}
        bgColor={"#57b846"}
        borderColor={"#57b846"}
        onClick={e => logingetUser(userName, passWord) }
        rounded
      />
    </SubmitButtonConatiner>
    <Link link="/member/signup">S'Enregistrer</Link>
    <Link link="/member/forgotpassword">Mot de Passe Oublie</Link>
  </LoginForm>
);

const mapStateToProps = state => ({
  userName: state.login.username,
  passWord: state.login.password
});
const mapDispatchToProps = { loginUsername, loginPassword, logingetUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
