/**
 * Node Modules
 */
import { redirect } from "react-router";

/**
 *custom Modules 
 */
import { account } from "../../lib/appwrite";


const RegisterLoader = async () => {
    try {
        // Attempt to retrieve the user's account information
        const user = await account.get();
        if (user) {
            redirect("/");
        }
    } catch {
        return null;
    }

    return redirect("/");
}

export default RegisterLoader;