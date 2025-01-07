import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { React } from '../assets/assets';

import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import Button from '../components/Button';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import AfterDataProcessing from '../components/AfterDataProcessing';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { account } from '../lib/appwrite';
import { toast, ToastContainer } from 'react-toastify';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reqState, setReqState] = useState('');
  const [searchParams] = useSearchParams();

  const handleResetPassword = (data) => {
    setIsSubmitting(true);

    const { password } = data;
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');

    const promise = account.updateRecovery(userId, secret, password);

    promise
      .then(() => {
        setReqState('success');
      })
      .catch((err) => {
        if (err.type == 'user_invalid_token')
          toast.error('there was a problem, try requesting a new reset link.');
        else if (err.type == 'general_rate_limit_exceeded')
          toast.error('there was a problem, please try again later');
        else toast.error('Error', err.message);
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

      <PageTitle title='Reset Password' />
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
          {reqState == 'success' ? (
            <AfterDataProcessing
              h2Text='Your Password have been updated!'
              buttonText='Back to Login'
              link='/login'
            />
          ) : (
            <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
              <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
                Reset your password
              </h2>
              <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                please provide a new password
              </p>

              <form
                onSubmit={handleSubmit(handleResetPassword)}
                method='POST'
                className='grid grid-cols-1 gap-4'
              >
                <FieldText
                  label='Password'
                  name='password'
                  placeholder='Enter Your Password'
                  required
                  register={register}
                  errors={errors}
                  type='password'
                  rules={{
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                    required: 'Password is required',
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/,
                      message:
                        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                    },
                  }}
                />
                <PasswordStrengthMeter password={watch('password')} />
                <FieldText
                  label='Confirm Password'
                  name='confirmPassword'
                  placeholder='Confirm Your Password'
                  required={true}
                  register={register}
                  errors={errors}
                  type='password'
                  rules={{
                    required: 'Confirm password is required',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  }}
                />

                <Button
                  type='submit'
                  className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default ResetPassword;
