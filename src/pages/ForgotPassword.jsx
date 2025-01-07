import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { React } from '../assets/assets';

import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import Button from '../components/Button';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import { account } from '../lib/appwrite';
import AfterDataProcessing from '../components/AfterDataProcessing';
import { toast, ToastContainer } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import forgotPasswordSchema from '../schemas/forgotPasswordSchema';

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotPasswordSchema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleForgotPassword = (data) => {
    setIsSubmitting(true);

    const promise = account.createRecovery(
      data.email,
      'http://localhost:5173/resetPassword',
    );

    promise
      .then(() => {
        setIsSent(true);
      })
      .catch((err) => {
        if (err.type == 'user_not_found')
          toast.error("looks like you don't have an account!");
        else if (err.type == 'general_rate_limit_exceeded')
          toast.error('there was a problem, please try again later');
        else toast.error(err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={6000}
      />
      <PageTitle title='Forgot Password' />
      <div className='relative grid min-h-dvh grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <Link
            to={'/'}
            className='mx-auto mb-auto w-16 max-w-max lg:mx-0'
          >
            <img
              src={React}
              className='' alt='Dark Logo'
            />
          </Link>
          {isSent ? (
            <AfterDataProcessing
              buttonText='Take me Home'
              h2Text="We've send you a reset link. Please check youe email!"
              link='/'
            />
          ) : (
            <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
              <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
                Forgot your password?
              </h2>
              <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                We&apos;ll send you a reset link to reset your password
              </p>

              <form
                onSubmit={handleSubmit(handleForgotPassword)}
                method='POST'
                className='grid grid-cols-1 gap-4'
              >
                <FieldText
                  label='Email'
                  name='email'
                  type='email'
                  placeholder='Enter Your Email'
                  autoFocus={true}
                  register={register}
                  errors={errors}
                />

                <Button
                  type='submit'
                  className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send me the link'}
                </Button>
              </form>
            </div>
          )}

          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant'>
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>

        <BackgroundGradientAnimation
          containerClassName='hidden lg:relative lg:block lg:overflow-hidden lg:rounded-large'
          className=''
        >
          <p className='absolute bottom-10 left-12 right-12 z-10 text-right text-displayLarge font-semibold leading-tight text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Bring your ideas to life with WebHawks
          </p>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
}

export default ForgotPassword;
