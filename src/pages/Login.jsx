import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { account } from '../lib/appwrite';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import Button from '../components/Button';
import { loginSchema } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oauth from '../components/Oauth';
import AuthNavbar from '../components/AuthNavbar';
import { Banner } from '../assets/assets';

const Login = () => {
  const {
    register: LoginToAccount,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await account.createEmailPasswordSession(data.email, data.password);
      toast.success('Welcome back! You have successfully logged in.');

      setTimeout(() => {
        navigate('/');
      }, 3000); // 3 second delay
    } catch (error) {
      console.error('Login failed:', error.message);
      toast.error("Email or password isn't correct. Please try again.");
    }
  };

  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter Your Email',
      rules: loginSchema.shape?.email,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter Your Password',
      rules: loginSchema.shape?.password,
    },
  ];

  return (
    <>
      <PageTitle title='Welcome back to your account' />
      <ToastContainer
        position='top-right'
        autoClose={6000}
      />
      <div className='relative grid min-h-dvh grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <AuthNavbar />
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
              Log In Here
            </h2>
            <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
              Please enter your credentials to access your account. We’re glad
              to have you back!
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              {formFields.map((field, index) => (
                <FieldText
                  key={index}
                  label={field.label}
                  name={field.name}
                  register={LoginToAccount}
                  errors={errors}
                  type={field.type}
                  autoFocus={field.name === 'fullName' ? true : false}
                  placeholder={field.placeholder}
                  rules={field.rules}
                />
              ))}

              <Link
                to='/forgot-password'
                className='text-right link ms-1 inline-block text-light-onSurface dark:text-dark-onSurface'
              >
                {' '}
                Forgot your password?
              </Link>
              <Button
                type='submit'
                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <p className='mt-4 text-center text-bodyMedium text-light-onSurfaceVariant dark:text-white'>
              Don't have an account?
              <Link
                to={'/register'}
                className='link ms-1 inline-block text-light-onSurface dark:text-dark-onSurface'
              >
                Register here
              </Link>
            </p>
            <div className='relative my-8 h-px w-full bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant'>
              <span className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-light-background px-4 text-bodyMedium text-light-onSurfaceVariant dark:bg-dark-background dark:text-light-primaryContainer'>
                OR
              </span>
            </div>
            <Oauth />
          </div>

          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-white'>
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>
        <img
          src={Banner}
          alt=''
          className='hidden h-full w-full rounded-small object-cover lg:block'
        />
      </div>
    </>
  );
};

export default Login;
