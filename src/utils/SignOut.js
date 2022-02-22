import { signOut, getAuth } from 'firebase/auth'

const auth = getAuth()

function SignOut (setUser) {
    signOut(auth)
    .then(setUser(null))
    .catch((e)=>console.log(e))
}

export default SignOut