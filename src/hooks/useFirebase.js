import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import swal from 'sweetalert';
import initializeAuthentication from "../firebase/firebase.init";
// import initialiAuthentication from "../FirebaseLink/FirebaseLink

initializeAuthentication()
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const history=useHistory()
    const [isLogin,setisLogin]=useState(false);
    const [name,setName]=useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const GoogleLogin=()=>{
     
     return signInWithPopup(auth, Googleprovider)
        // .then(result=>{
        //     console.log(result.user)
        //     setUser(result.user);
        // })
    }

    const handleCreateUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            setUser(result)
            swal("Good job!", "Account has been created!", "success");
            // setUserName(name)
            userProfile()
          
          })
          .catch(error => error.message)
      }

      const handleSignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            setUser(result.user)
            swal("Sign in Successful!", "Welcome !")
          })
          .catch(error => error.message)
      }

      const handleUpdate= event=>{
        setName(event.target.value)
       }

       //sign up functionality
       const userProfile=()=>{
        updateProfile(auth.currentUser,{displayName:name})
          .then(result=>{
    
          })

         
      }
     

    useEffect(()=>{
        onAuthStateChanged (auth,user=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false);
        })
    },[])

    const logout=()=>{
      setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
            // .finally(() => setIsLoading(false));
        })
        swal("Logout Successful!", "You are logged out!", "success");
        // history.push('/login')
    
    }


    
    return{
        user,
        GoogleLogin,
        isLoading,
        logout,
        handleCreateUser,
        handleSignInUser,
        isLogin,
        handleUpdate,
        userProfile
    }
}
export default useFirebase