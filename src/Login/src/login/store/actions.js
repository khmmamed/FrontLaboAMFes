import axios from "axios";
//=>Config
const base = "http://localhost:8000"
const Uri = { login: base+"/login", signup: "/member/signup" };

/****************************************
 ******** function dispatcher   *********
 ****************************************/
//====> Login Page
export const loginUsername = (username)=>dispatch=>dispatch({ type: "TYPING_USERNAME", value: username });
export const loginPassword = (password)=>dispatch=>dispatch({ type: "TYPING_PASSWORD", value: password });
export const logingetUser = (userName, passWord) => dispatch =>{
    dispatch({type : "FETCHING_USER"})
    axios
        .post(Uri.login, {
            username: userName,
            password: passWord
        })
        .then((response)=>dispatch({type : "USER_RECIEVED", username : response.data.username}))
        .catch((error)=>dispatch({type : "FETCHING_ERROR" , err : error }));
}
        
//====> Signup Page
export const getSignupEmail = (email)=>dispatch => dispatch({type: "TYPING_EMAIL", value : email});
export const getSignupPassword = (password)=>dispatch => dispatch({type: "TYPING_PASSWORD", value : password});
export const getSignupConfirmPassword = (confirmPassword)=>dispatch => dispatch({type: "TYPING_PASSWORD_CONFIRMATION", value : confirmPassword});
export const signUpValidation = (Email, password, confirmPassword) => dispatch =>{
    dispatch({type : "ALERT_MESSAGE" , message : "Please Wait Our App to save your data..."});
    axios
          .post("http://localhost:8000/signup", {
            email: Email,
            password: password,
            confirmPassword : confirmPassword
          })
          .then((response) => {
            dispatch({type : "FECTCHED_DATA", data : response.data});
          })
          .catch((error)=> {
            dispatch({type : "FETCHING_ERROR" , error : error});
          });
}


//====> ForgetPassword Page