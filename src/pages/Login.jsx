import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { account } from '../lib/appwrite';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import Button from '../components/Button';
import { loginSchema } from '../schemas/loginSchema';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  React,
  LinkedinIcon,
  GoogleIcon,
} from '../assets/assets';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';

const Login = () => {
  const {
    register: LoginToAccount,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    setLoginError('');
    try {
      // Validate data
      loginSchema.parse(data);

      //  login
      await account.createEmailPasswordSession(data.email, data.password);

      // Navigate to home
      navigate('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(error.errors);

        setLoginError("Email or password isn't correct, Please try again.");
      } else {
        console.error('Login failed:', error);
        setLoginError(error.message || 'Login failed. Please try again.');
      }
    }
  };

  return (
    <>
      <PageTitle title='Welcome back to your account' />
      <div className='relative grid h-dvh w-screen grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <Link
            to={'/'}
            className='mx-auto mb-auto w-16 max-w-max lg:mx-0'
          >
            <img
              src={React}
              alt='Dark Logo'
            />
          </Link>
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
              Log In Here
            </h2>

            <p className='text-center text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
              Please enter your credentials to access your account. We’re glad
              to have you back!
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <FieldText
                label='Email'
                name='email'
                placeholder='Enter Your Email'
                required
                register={LoginToAccount}
                autoFocus={true}
                errors={errors}
                type='email'
              />
              <FieldText
                label='Password'
                name='password'
                placeholder='Enter Your Password'
                required
                register={LoginToAccount}
                errors={errors}
                type='password'
              />
              <Button
                type='submit'
                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
              <Link
                to='/forget-password'
                // className='text-cyan-800 hover:underline'
                className='text-center text-light-onSurface dark:text-dark-primary hover:underline '
              >
                Forget your password?
              </Link>
              {loginError && <p className='text-red-500'>{loginError}</p>}

              <div className='flex justify-center gap-4 mt-4'>
                <Button
                  variant='withIcon'
                  type='button'
                >
                  <img
                    src={FacebookIcon}
                    alt='Facebook'
                    className='h-6 w-6'
                  />
                </Button>
                <Button
                  variant='withIcon'
                  type='button'
                >
                  <img
                    src={GoogleIcon}
                    alt='Google'
                    className='h-6 w-6'
                  />
                </Button>
                <Button
                  variant='withIcon'
                  type='button'
                >
                  <img
                    src={LinkedinIcon}
                    alt='LinkedIn'
                    className='h-6 w-6'
                  />
                </Button>
              </div>

              <p className='mt-4 text-center'>
                Don't have an account?
                <Link
                  to='/register'
                  className='text-light-onSurface dark:text-dark-primary hover:underline'
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant'>
            &copy; 2024 WebHawks. All rights reserved.
          </p>
        </div>

        <BackgroundGradientAnimation containerClassName='hidden lg:relative lg:block lg:overflow-hidden lg:rounded-large'>
          <p className='absolute bottom-10 left-12 right-12 z-10 text-right text-displayLarge font-semibold leading-tight text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Bring your ideas to life with WebHawks
          </p>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
};

export default Login;
