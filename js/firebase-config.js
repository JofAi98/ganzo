// Firebase project for this app: not created yet. See BLUEPRINT.md, "Firebase and security".
// These values only identify the project; they are not secrets. What keeps the app
// private is the sign-in (password plus a code from an authenticator), ownerUid
// below, and firestore.rules, which lets only that account read or write anything.
// While apiKey is empty, sync is off and the app runs on this device only.
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// The only account allowed to open the app (Feyza's User UID, once her account exists).
export const ownerUid = '';
