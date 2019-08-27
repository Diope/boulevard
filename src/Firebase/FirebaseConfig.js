import fb from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
fb.initializeApp(firebaseConfig);

const auth = fb.auth();
const db = fb.firestore();
const currentUser = auth.currentUser;

// Collections
const userCollection = db.collection("users");

const provider = new fb.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


const signInWithGoogle = () => auth.signInWithPopup(provider)
const createUserProfile = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = userCollection.doc(userAuth.uid);
    const snapshop = await userRef.get()

    if (!snapshop.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export {
    auth,
    db,
    currentUser,
    signInWithGoogle,
    createUserProfile
}

