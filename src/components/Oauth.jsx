/**
 * Components
 */
import Button from './Button';
import {
    LinkedinIcon,
    FacebookIcon,
    GoogleIcon,
} from '../assets/assets';
/* 
*Appwrite connection
*/
import { account } from '../lib/appwrite';

const Oauth = () => {
    const handleGoogleRegister = () => {
        account.createOAuth2Session(
          'google', 
          `${window.location.origin}`, // Success URL (redirect after registration)
          `${window.location.origin}/register` // Failure URL (redirect if registration fails)
        );
      };
    return (
        <div className='mb-10 flex justify-center gap-5'>
            <Button
                variant='withIcon'
                className='hover:scale-125 hover:bg-light-background dark:bg-dark-background dark:hover:bg-dark-background'
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
                className='hover:scale-125 hover:bg-light-background dark:bg-dark-background dark:hover:bg-dark-background'
                type='button'
                onClick={handleGoogleRegister}
            >
                <img
                    src={GoogleIcon}
                    alt='Google'
                    className='h-6 w-6'
                />
            </Button>
            <Button
                variant='withIcon'
                className='hover:scale-125 hover:bg-light-background dark:bg-dark-background dark:hover:bg-dark-background'
                type='button'
            >
                <img
                    src={LinkedinIcon}
                    alt='Linkedin'
                    className='h-6 w-6'
                />
            </Button>
        </div>
    )
}

export default Oauth