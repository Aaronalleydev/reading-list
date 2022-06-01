import { ref } from "vue";

// Firebase imports
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// Ref for user

const user = ref(auth.currentUser)

// auth changes - _user reps current user when function fired
onAuthStateChanged(auth, _user => {
    console.log('User state changed. Current user is:', _user )
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser