import axios from "axios";
//=>Config
const base = "http://localhost:8000"
const Uri = { login: base+"/login", signup: "/member/signup" };

/****************************************
 ******** function dispatcher   *********
 ****************************************/
//====> Login Page
export const setUsername = (username)=>dispatch=>{dispatch({ type: "TYPING_USERNAME", value: username })};
export const setPassword = (password)=>dispatch=>dispatch({ type: "TYPING_PASSWORD", value: password });
export const getUser = (userName, passWord) => dispatch =>{
    axios
        .post(Uri.login, {
              email: userName,
              password: passWord
        })
        .then(function(response) {
              console.log(response.data.username);
        })
        .catch(function(error) {
              console.log(error);
        });
}
        
//====> Signup Page

//====> ForgetPassword Page