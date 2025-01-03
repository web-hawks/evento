/**
 * Node Modules
 */
import { Link, redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

/**
 * Custom Modules
 */
import { account } from '../lib/appwrite';
import generateID from '../utils/generateID';

/**
 * Components
 */
import { React } from '../assets/assets';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import Button from '../components/Button';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import { FacebookIcon, GoogleIcon } from '../assets/assets';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    try {
      await account.create(
        generateID(),
        data.email,
        data.password,
        data.fullName,
      );
    } catch (error) {
      console.error('Registration failed', error);
      // Here you can add logic to show an error message to the user
    }

    // After Successfully creating an account, login the user and redirect to the home page
    try {
      // create a session for the new user with the provided email and password
      await account.createEmailPasswordSession(data.email, data.password);
    } catch (error) {
      console.error('Login failed', error);
      redirect('/login');
    } finally {
      setIsSubmitting(false);
    }

    return redirect('/');
  };

  return (
    <>
      <PageTitle title='Create an account' />

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
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
              Create an account
            </h2>
            <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
              Register Today and get access to all the features of our platform
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <FieldText
                label='Full Name'
                name='fullName'
                register={register}
                required
                errors={errors}
                rules={{ required: 'Full name is required' }}
                autoFocus={true}
                placeholder='Full name'
              />
              <FieldText
                label='Email'
                name='email'
                placeholder='Enter Your Email'
                required
                register={register}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email is not valid',
                  },
                }}
                errors={errors}
                type='email'
              />
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
              <FieldText
                label='Age'
                name='age'
                placeholder='Enter Your Age'
                register={register}
                errors={errors}
                type='number'
                rules={{
                  min: {
                    value: 18,
                    message: 'You must be at least 18 years old',
                  },
                  max: {
                    value: 99,
                    message: 'You must be at most 99 years old',
                  },
                  required: 'Age is required',
                }}
              />
              <div className='flex max-w-md flex-col gap-4'>
                <label className='group flex cursor-pointer items-center space-x-3'>
                  <div className='relative flex items-center justify-center'>
                    <input
                      type='checkbox'
                      {...register('termsAccepted', {
                        required: 'You must accept the terms and conditions',
                      })}
                      className='peer sr-only'
                    />
                    <div className='h-6 w-6 rounded-md border-2 border-dark-primary transition-all duration-medium1 ease-legacy peer-checked:bg-light-primary dark:border-light-primary dark:peer-checked:bg-dark-primary'>
                      <svg
                        className='hidden h-4 w-4 fill-current text-white peer-checked:block'
                        viewBox='0 0 20 20'
                      >
                        <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                      </svg>
                    </div>
                  </div>
                  <span className='flex-grow text-sm text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                    I accept the{' '}
                    <Link
                      to='/terms'
                      className='inline-block hover:underline'
                    >
                      terms and conditions
                    </Link>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p
                    className='pl-9 text-labelMedium italic text-light-error dark:text-dark-error'
                    role='alert'
                  >
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <p className='dark:text-dark-onSurfaceVarian mt-4 text-center text-bodyMedium text-light-onSurfaceVariant'>
              Already have an account?
              <Link
                to={'/login'}
                className='link ms-1 inline-block text-light-onSurface dark:text-dark-onSurface'
              >
                Log in
              </Link>
            </p>
            <div className='relative my-8 h-px w-full bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant'>
              <span className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-light-surface px-4 text-bodyMedium text-light-onSurfaceVariant dark:bg-dark-surface'>
                OR
              </span>
            </div>
            <div className='mb-10 flex justify-center gap-5'>
              <Button
                variant='withIcon'
                className='' type='button'
              >
                <img
                  src={FacebookIcon}
                  alt='Facebook'
                  className='h-6 w-6'
                />
              </Button>
              <Button
                variant='withIcon'
                className='' type='button'
              >
                <img
                  src={GoogleIcon}
                  alt='Google'
                  className='h-6 w-6'
                />
              </Button>
            </div>
          </div>

          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant'>
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>
        {/* <img 
            src={Banner} 
            alt="" 
            className="img-cover" /> */}
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
};

export default Register;
