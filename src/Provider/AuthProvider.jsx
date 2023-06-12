import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userinfo = (u) => {
    const email = u.email;
    const userType = "student";
    const userRequest = null;
    const userData ={email, userType,userRequest}

    fetch("https://abc-server-ataher-ali.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  

  const googleLogin = () => {
    console.log("google");
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userinfo(user);
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Log in successful",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };


  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser();
        Swal.fire({
          icon: "success",
          title: "Log out successful",
        });
      })
      .catch(() => {});
  };

  const password_register = (email, password, name, url) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        });
        const user = userCredential.user;
        console.log(user);
        userinfo(user);
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Register Successful",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const password_login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Log in successful",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        console.log(user);
        setUser(user);
        Swal.fire({
          icon: "error",
          title: `${errorCode} `,
        });
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
  };
  }, []);


  // user types
  const [userStatus,setUserStatus] = useState()

  const email= user?.email
  const user_url = `https://abc-server-ataher-ali.vercel.app/users/${email}`

useEffect(() => {
    fetch(user_url)
    .then(res => res.json())
    .then(data =>setUserStatus(data.userType) )
}, [user_url]);

//all users
const [allUser,setAllUser]=useState([])
const all_user_url = `https://abc-server-ataher-ali.vercel.app/users`

useEffect(() => {
    fetch(all_user_url)
    .then(res => res.json())
    .then(data =>setAllUser(data) )
}, [all_user_url]);

//all courses
const [course,setCourse]=useState([])
const all_class_url = `https://abc-server-ataher-ali.vercel.app/courses`

useEffect(() => {
    fetch(all_class_url)
    .then(res => res.json())
    .then(data =>setCourse(data) )
}, [all_class_url]);


// add to cart
const AddToCart = (data)=>{

  const corse_id = data?._id
  const my_email = user?.email
  const corse_name = data?.corse_name
  const price = data?.price
  const course_uid =`${corse_id}${my_email}`
  
  const selected_course_Data ={corse_id,my_email,corse_name ,price,course_uid}
  
  console.log(selected_course_Data);
  
  console.log('Add Cart');
  
  fetch("https://abc-server-ataher-ali.vercel.app/selected_course", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(selected_course_Data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data){
        return  Swal.fire({
          icon: "success",
          title: `${corse_name} \n Add to Cart successful`,
        });
       
      }
        return Swal.fire({
          icon: "error",
          title: "Already added ",
        });
      
  
    });

   
}
  const authInfo = {
    user,
    googleLogin,
    loading,
    password_register,
    password_login,
    logOut,
    userStatus,
    allUser,
    course,
    AddToCart,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
