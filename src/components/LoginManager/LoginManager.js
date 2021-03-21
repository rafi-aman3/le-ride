import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../Login/firebaseConfig'

export const initializeLogInFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app()
    }
};


export const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(gProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = {
                name: displayName,
                email
            }
            return signedInUser;

        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
};

export const createUserWithEmailandPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const newUserInfo = userCredential.user;
            newUserInfo.error = '';
            newUserInfo.success = "Successfully Registered!";
            updateUserName(name);
            return newUserInfo;

        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = '';
            return newUserInfo;
        });
};

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(() => {
        console.log("Username updated");
    }).catch(error => {
        console.log(error);
    });
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var userInfo = userCredential.user;
            const newUserInfo = { ...userInfo};
            newUserInfo.error = '';
            newUserInfo.success = "Log In Successful!";
            return newUserInfo;
        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = '';
            return newUserInfo;
        });
};