/**
 * Components
 */
import Button from './Button';
import {
    LinkedinIcon,
    FacebookIcon,
    GoogleIcon,
} from '../assets/assets';

const Oauth = () => {
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