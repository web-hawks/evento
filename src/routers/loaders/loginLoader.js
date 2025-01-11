import { redirect } from "react-router-dom";
import { account } from '../../lib/appwrite';

  const loginLoader = async () => {
  try {
    const session = await account.getSession("current");
    if (session) {
      // Redirect to home if the user is already logged in
      return redirect("/");
    }
  } catch (error) {
    console.log("No active session. User can log in.");
  }
  return null; // No redirection, render the login page
};

export default loginLoader;