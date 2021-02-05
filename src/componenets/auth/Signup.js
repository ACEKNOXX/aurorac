// import React, { useRef,useState } from 'react'
// import {Link, useHistory } from 'react-router-dom';
// import Navbar from '../pages/includes/widgets/Navbar'
// import { useAuth } from './../../context/AuthContext'
// import './../css/App.css'

// export default function Signup() {
//     const usernameRef = useRef(null);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const { signup,firebaseC} = useAuth();
//     // error state below
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)
//     const history = useHistory()

//     const handleSubmit = async(e) => {
//         e.preventDefault();
        
//         // alert(passwordRef.current.value);
        
//         if (passwordRef.current.value.length < 6 ) {
//             return setError('Password should be atleast 6 chars')
//         }
        
//         try {
//             setError('')
//             setLoading(true)
//             var user= await signup(emailRef.current.value, passwordRef.current.value)
//             console.log(user.user.uid);
//             var dataToPush = {
//                 "username": usernameRef.current.value,
//                 "email":emailRef.current.value
//             }
//             await firebaseC("user",user.user.uid,dataToPush);
//             history.push('/')
            
//         }  catch (e) {
//             console.log(e)
//             let errMsg = e.message;
//             setError(errMsg)
//         }
//         setLoading(false)
//     }
//     return (
//         <div>
//             <Navbar />
//              <div className="row" style={{
//                 width:"100% !important",
//             }}>
//                 <div className="col s12 m5" >
                    
//                     <div className="center">
//                         <i className="material-icons medium center">account_circle</i>
//                     </div>
//                     <div className="row container">
                        
                        
//                         <div className="col s12">
//                              {error &&
//                                 <div className="row alert-err" style={{ padding: "16px" }} >
//                                     <span className="white-text  mt-25" >
//                                         {error}
//                                     </span>
//                                 </div>
//                             }
//                         </div>
//                         <div className="col s12">
//                             <form  onSubmit={handleSubmit}>
//                             <div className="form-section-1 container mt-25 row">
//                                 <div className=" col s12" >
//                                     <label htmlFor="username" className="col s12 grey-text">Username</label>
//                                     <input id="username" className="col s12 mt-50 ful l-w" placeholder="username" ref={usernameRef} type="text" required/>
//                                 </div>
//                             </div>
//                             <div className="form-section-1 container mt-25 row">
//                                 <div className=" col s12" >
//                                     <label htmlFor="email" className="col s12 grey-text">Email Address</label>
//                                     <input id="email" className="col s12 mt-50 ful l-w" placeholder="email address" ref={emailRef} type="email" required/>
//                                 </div>
//                             </div>
                           
//                             <div className="form-section-1 container mt-50 row">
//                                 <div className=" col s12" >
//                                     <label htmlFor="pass" className="col s12 grey-text">Password</label>
//                                     <input  className="col s12 mt-50 full-w" id="pass" placeholder="password" ref={passwordRef} type="password" required/>
                                
//                                 </div>
//                             </div>
//                             <div className="row mt-25">
//                                 <div className="col s1"></div>    
//                                     <button disabled={loading} type="submit" style={{ marginLeft: "5px" }}
//                                         className="col s10 btn-large btn-flat btn-large-primary white-text green" >
//                                         Register
//                                 </button>
//                             </div>
//                             <div className="col s12 center">
//                                 <p>I already have an account ? <Link to="/">Login</Link> </p>
//                             </div>
                            
//                             </form>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="col s12 m7 signUpHero" style={{padding:"0px !important"}}>
//                     <div className="grey darken-4" style={{height:"600px",opacity:"0.8"}}></div>
//                 </div>
//             </div>
//         </div>
        

//     )
// }

import React, { useRef,useState } from 'react'
import {Link, useHistory } from 'react-router-dom';
import Navbar from '../pages/includes/widgets/Navbar'
import { useAuth } from './../../context/AuthContext'
import app,{firestore} from './../../firebase'
import './../css/App.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button';

export default function Signup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { signup,firebaseC} = useAuth();
    // error state below
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        // alert(passwordRef.current.value);
        
        if (passwordRef.current.value.length < 6 ) {
            return setError('Password should be atleast 6 chars')
        }
        
        try {
            setError('')
            setLoading(true)
            // console.log(user.user.uid);
            console.log("username",usernameRef.current.value);
            console.log("email address", emailRef.current.value)
            console.log("pass",passwordRef.current.value)
            console.log("agagon")
            var user= await signup(emailRef.current.value, passwordRef.current.value)
            
            
            // console.log(user.user.uid)
            var savedUser = await firestore.collection("users")
                .doc(user.user.uid).set({
                    "uid":user.user.uid,
                    "username": usernameRef.current.value,
                    "email":emailRef.current.value
                })
            console.log(savedUser)
            // history.push('/')
            
        }  catch (e) {
            console.log(e)
            let errMsg = e.message;
            setError(errMsg)
        }
        setLoading(false)
    }
    
  return (
    <div>
        <Button variant="outlined" className="right btn-flat btn-primary btn-oultine transparenet " style={{
              margin: "0px 10px",
           
        }} onClick={handleClickOpen}>
        SignUp
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
                  <h4 className="center">Sign up</h4>
            <div className="center">
                <i className="material-icons medium center">account_circle</i>
            </div>
            {error &&
                <div className="col s12">
                    <div className="row alert-err" style={{ padding: "16px" }} >
                        <span className="white-text  mt-25" >
                            {error}
                        </span>
                    </div>
                </div>
            }
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="center">
            Enjoy unlimited learning experience
          </DialogContentText>

           <div className="modal-content " style={{width:"400px !important"}}>
                <div className="row" id="login-form" >
                    {/* <div className="col  s12 center ">
                        { currentUser && <Link to="/user">You logged in pls continue</Link> }    
                    </div> */}
                    <div className="pt-25">
                        <form onSubmit={handleSubmit}>
                                <div className="">
                            <div className="row">
                                
                                <div className="col s12 body ">
                                    
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="username" className="col s12 grey-text">Username</label>
                                            <input ref={usernameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="email address"  type="text" />
                                        </div>
                                    </div>
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                            <input id="email" className="col s12 mt-50 ful l-w" placeholder="email address" ref={emailRef} type="email" />
                                        </div>
                                    </div>
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="password" className="col s12 grey-text">Password</label>
                                            <input  className="col s12 mt-50 full-w" id="password" ref={passwordRef} placeholder="password" type="password" />
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                    <button disabled={loading} type="submit" className="col s12 btn-flat btn-large btn-large-primary white-text green"
                                    style={{
                                              marginLeft:"5px"
                                    }}>
                                      {loading &&
                                        <CircularProgress disableShrink  />
                                      }
                                      {!loading &&
                                          <b>Login</b>
                                      }
                                    </button>
                                    </div>
                                        
                                </div>
                            </div>
                            <div className="full-w center">
                                <p>Don’t have account yet? 
                                    <Link to="/signup"  className="green-text">Join Aurora today</Link> 
                                </p>
                            </div>
                            <div className="full-w center">
                                <p> 
                                    <Link to="/signup"  className="green-text">Forget Password</Link> 
                                </p>
                            </div>
                        </div>
                        
                        </form>
                    </div>
                    
                </div>
            </div>
        </DialogContent>
        <DialogActions>
          
          {/* <Button onClick={handleClose} color="primary">
            Forget Password
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
