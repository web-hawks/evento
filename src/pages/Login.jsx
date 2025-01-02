
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import PageTitle from "../components/PageTitle";
import FieldText from "../components/FieldText";
import Button from "../components/Button";
import { React } from "../assets/assets"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"


const Login = () => {
    const { register:LoginToAccount, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        const checkSession = async () => {
            try {
                // Check for (active session)
                const session = await account.getSession('current');
                if (session) {
                    // If there is an active session, redirect to home
                    navigate('/');
                }
            } catch (error) {
                // No active session
                console.log("No active session. User can log in.");
            }
        };

        checkSession();
    }, [navigate]);

    const onSubmit = async (data) => {
        setLoginError(""); // Reset error 

        try {
            // to create a session 
            await account.createEmailPasswordSession(data.email, data.password);
            navigate('/'); // after successful login
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError(error.message || "Login failed. Please try again.");
        }
    };

    return (

             <>
                     <PageTitle title="Login to your Account" />

             <div className="relative grid h-dvh w-screen grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                 <div className="flex flex-col p-2">
                     <Link 
                         to={"/"}
                         className="mx-auto mb-auto w-16 max-w-max lg:mx-0"
                     >
                         <img src={React} alt="Dark Logo" />
                     </Link>
                     <div className="mx-auto flex w-full max-w-[480px] flex-col gap-2">
                         <h2 className="text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary">
                             Log In Here
                         </h2>
                         <form 
                             onSubmit={handleSubmit(onSubmit)}
                             method="POST"
                             className="grid grid-cols-1 gap-4"
                         >
                             <FieldText 
                                 label="Email"
                                 name="email"
                                 placeholder="Enter Your Email"
                                 required
                                 register={LoginToAccount}
                                 rules={{
                                     required: "Email is required",
                                     pattern: {
                                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                         message: "Email is not valid"
                                     },
                                 }}
                                 errors={errors}
                                 type="email"
                             />
                             <FieldText 
                                 label="Password"
                                 name="password"
                                 placeholder="Enter Your Password"
                                 required
                                 register={LoginToAccount}
                                 errors={errors}
                                 type="password"
                                 rules={{
                                     minLength: {
                                         value: 8,
                                         message: "Password must be at least 8 characters"
                                     },
                                     required: "Password is required",
                                     pattern: {
                                         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/,
                                         message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                                     }
                                 }}
                             />

                          
                             <Button
                                 type="submit" 
                                 className="flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none"
                                 disabled={isSubmitting}
                             >
                                 {isSubmitting ? "Logging in..." : "Login Now"}
                             </Button>
                               <p className="mt-4 text-center">
                                Don't have an account? <Link to="/register" className="text-cyan-800 hover:underline">Register here</Link>
                         </p>
                         </form>
                     </div>

                     <p className="mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant">
                         &copy; 2024 WebHawks. All rights reserved.
                     </p>
                 </div>

                 <BackgroundGradientAnimation 
                     containerClassName="hidden lg:relative lg:block lg:overflow-hidden lg:rounded-large"
                 >
                     <p className="absolute bottom-10 left-12 right-12 z-10 text-right text-displayLarge font-semibold leading-tight text-light-onSurface drop-shadow-sm 2xl:text-[72px]">
                         Bring your ideas to life with WebHawks 
                     </p>
                 </BackgroundGradientAnimation>
             </div>
        
        
        
        
        
        
        
        </>
    );
};

export default Login;