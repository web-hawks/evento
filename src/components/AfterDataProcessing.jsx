import { useNavigate } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

function AfterDataProcessing({ link, h2Text, buttonText, pText }) {
  const navigate = useNavigate();

  return (
    <div className='mx-auto flex max-w-lg flex-col gap-6 px-2'>
      <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
        {h2Text}
      </h2>

      <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
        {pText}
      </p>
      <Button
        className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
        onClick={() => {
          navigate(link);
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default AfterDataProcessing;

AfterDataProcessing.propTypes = {
  link: PropTypes.string.isRequired,
  h2Text: PropTypes.string.isRequired,
  pText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};
