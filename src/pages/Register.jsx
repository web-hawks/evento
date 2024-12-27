
/**
 * Node Modules
 */
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"

/**
 * Components
 */
import { Banner, React } from "../assets/assets"
import PageTitle from "../components/PageTitle"
import FieldText from "../components/FieldText"
import PasswordStrengthMeter from "../components/PasswordStrengthMeter"
import Button from "../components/Button"



const Register = () => {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  }
  

  return (
    <>
      <PageTitle title="Create an account" />

      <div className="relative w-screen h-dvh grid grid-cols-1 lg:gap-2 p-2 lg:grid-cols-[1fr,1.2fr]">
        <div className="flex flex-col p-2">
          <Link 
            to={"/"}
            className="max-w-max w-16">
          <img src={React} 
               className="" 
               alt="Dark Logo" />
          </Link>
          <div className="flex flex-col max-w-[480px] w-full mx-auto gap-2">

            <h2 className="font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary text-center">Create an account</h2>
            <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-1 mb-4 px-2">
              Register Today and get access to all the features of our platform
            </p>
          
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              method="POST"
              className="grid grid-cols-1 gap-4">
              <FieldText
                label="Full Name"
                name="fullName"
                register={register}
                errors={errors}
                rules={{required: "Full name is required"}}
                autoFocus={true}
                placeholder="Full name"
                />
              <FieldText 
                label="Email"
                name="email"
                placeholder="Enter Your Email"
                register={register}
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
                register={register}
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
              <PasswordStrengthMeter password={watch("password")} />
              <FieldText
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                register={register}
                errors={errors}
                type="password"
                rules={{
                  required: "Confirm password is required",
                  validate: value => value === watch("password") || "Passwords do not match"
                }}
                />
              <FieldText
              label="Age"
              name="age"
              placeholder="Enter Your Age"
              register={register}
              errors={errors}
              type="number"
              rules={{
                min: {
                  value: 18,
                  message: "You must be at least 18 years old"
                },
                max: {
                  value: 99,
                  message: "You must be at most 99 years old"
                },
                required: "Age is required"
              }}
              />
              <div className="flex flex-col gap-4">
                <label className="flex items-center">
                  <input 
                    type="checkbox"
                    {...register("termsAccepted",{required: "You must accept the terms and conditions"})} />
                    <span className="">
                      I accept the <a href="#" className="">terms and conditions</a>
                    </span>
                </label>
                {
                  errors.termsAccepted && (
                    <p 
                    className=""
                    role="alert">
                      {errors.termsAccepted.message}
                    </p>
                  )
                }
              </div>
              <Button
                type="submit" 
                className="h-10 flex justify-center items-center rounded-full text-labelLarge transition-shadow duration-short3 ease-standard hover:shadow-elevation2 focus:shadow-none"
                disabled={isSubmitting}
                loading={isSubmitting}
                >
                {isSubmitting ? "Creating account..." : "Create account"}
              </Button>
              
            </form>

            <p className="">Already have an account? <Link to={"/login"} className="">Log in</Link></p>
          </div>

          <p className="">
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>
        <div className="">
          <img 
            src={Banner} 
            alt="" 
            className="bg-cover" />
          
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tort
          </p>

        </div>
      </div>
    </>
  )
}

export default Register