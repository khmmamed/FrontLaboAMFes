import React from "react";
import EmailInput from "./components/Inputs/Input";
import PasswordInput from "./components/Inputs/Input";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import axios from "axios";
import Link from "./components/Links";
import SignUpButton from "./components/Buttons/Button";
import {signUpValidation, getSignupEmail, getSignupPassword, getSignupConfirmPassword} from "./store/actions" 

//import redux module
import { connect } from "react-redux";

const InputContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #6ace1e;
  margin-bottom: 35px;
  margin-top: ${props => props.top};
`;
const SignupForm = styled(Flex)`
  width: 100%;
`;

const Alert = ({message})=><div class="alert alert-danger" role="alert">{message}</div>

const Signup = ({ 
        Email, 
        password, 
        confirmPassword, 
        message, 
        redirect, 
        signUpValidation, 
        getSignupEmail, 
        getSignupPassword, 
        getSignupConfirmPassword  
      }) => {
    
    const redirectTo = (link) =>{
      window.location.replace(link)
    } 

    return  <SignupForm>
    <InputContainer>
      <EmailInput 
          type="email" 
          value={Email} 
          placeholder="Email" 
          onChange={e=> getSignupEmail(e.target.value)}
          material />
    </InputContainer>
    <InputContainer>
      <PasswordInput
        type="password"
        value={password}
        placeholder="password"
        onChange={e=>getSignupPassword(e.target.value)}
        material
      />
    </InputContainer>
    <InputContainer>
      <PasswordInput
        type="password"
        value={confirmPassword}
        placeholder="Retaper votre Password"
        onChange={e=>getSignupConfirmPassword(e.target.value)}
        material
      />
    </InputContainer>

    <SignUpButton
      text={"S'Enregister"}
      bgColor={"#d5281f"}
      borderColor={"#cb1414"}
      onClick={e => signUpValidation(Email, password, confirmPassword)}
      rounded
    />
    <Alert message={message}/>
    {redirect !== "" ? redirectTo(redirect) : null}
    <Link link="/member">Connecter</Link>
    <Link link="/member/forgotpassword">Mot de Passe Oublie</Link>
  </SignupForm>
};

//redux connection with component
const mapToProps = state => ({
  Email: state.signup.email,
  password: state.signup.password,
  confirmPassword: state.signup.confirmPassword,
  message : state.signup.message,
  redirect : state.signup.redirect
});

const mapFuncToProps = {signUpValidation, getSignupEmail, getSignupPassword, getSignupConfirmPassword};
export default connect(mapToProps, mapFuncToProps)(Signup);
