/**
 * Node modules
 */
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const PasswordStrengthMeter = ({ password }) => {
  const calculateScore = (password) => {
    let strength = 0;
    if (password?.length > 6) strength++;
    if (password?.match(/[a-z]+/)) strength++;
    if (password?.match(/[A-Z]+/)) strength++;
    if (password?.match(/[0-9]+/)) strength++;
    if (password?.match(/[!@#$%^&*()]+/)) strength++;
    return strength;
  };

  const score = useMemo(() => calculateScore(password), [password]);

  const getStrengthText = (score) => {
    switch (score) {
      case 0:
        return 'Very Weak 🤖';
      case 1:
        return 'Weak 👾';
      case 2:
        return 'Fair 🤕';
      case 3:
        return 'Good 😃';
      case 4:
        return 'Strong 😎';
      case 5:
        return 'Very Strong 🤩';
      default:
        return '';
    }
  };

  const strengthText = getStrengthText(score);

  return (
    <div className={`transition-opacity duration-medium2`}>
      {/* Text Score */}
      <div className='mb-1 flex justify-between'>
        <span className='text-sm font-medium text-gray-700'>
          Password Strength:
        </span>
        <span
          className='text-sm font-bold'
          aria-live='polite'
        >
          {strengthText}
        </span>
      </div>
      {/* Color Score */}
      <div
        className='h-2 w-full rounded bg-gray-200'
        role='progressbar'
        aria-valuenow={score}
        aria-valuemin='0'
        aria-valuemax='5'
      >
        <div
          className={`h-2 rounded ${
            score === 0
              ? 'bg-red-500'
              : score === 1
                ? 'bg-orange-500'
                : score === 2
                  ? 'bg-yellow-500'
                  : score === 3
                    ? 'bg-green-500'
                    : score === 4
                      ? 'bg-blue-500'
                      : 'bg-purple-500'
          } duration-long2 transition-all`}
          style={{
            width: `${score * 20}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordStrengthMeter;
