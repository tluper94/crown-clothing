import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUp from '../../component/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };



  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => logGoogleUser()}>Sign in with google popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
