import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(true);

  const googleLogin = () =>{
    console.log('google');
    return  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user)
      Swal.fire({
        icon: 'success',
        title:'Log in successful',
        
      })
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const logOut =()=>{
    setLoading(true);
    signOut(auth)
    .then(() => {
      setUser()
      Swal.fire({
        icon: 'success',
        title:'Log out successful',
        
      })
    })
    .catch(() => {});
  }

  const password_register =(email,password)=>{
   console.log(email,password);
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     console.log(user);
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(errorCode , errorMessage);
   });
   
}

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
     setUser(currentUser);
     setLoading(false);
    });
    return () =>{
        unsubscribe();
    }
  }, [])


    const authInfo ={
      user,
      googleLogin,
      loading,
      password_register,
      logOut
      }
    return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;