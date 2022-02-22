import { auth, provider } from './../firebase'
import { signInWithPopup } from "firebase/auth";

async function Login (setUser, setUID) {
    signInWithPopup(auth, provider)
    .then((result) => {
        setUser(result.user) 
        setUID(auth.currentUser.uid)
    })
    // .then(setUID(auth.currentUser.uid))
    .catch((error) => console.log(error))
}

export default Login