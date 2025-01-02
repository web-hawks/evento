import React from 'react';
const Toast = ({ message, type, onClose }) => {
  const bgColor = 
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'info' ? 'bg-blue-500' :
    'bg-gray-500'; 
  return <>
    <div className={`fixed bottom-4 right-4 w-72 p-4 rounded-lg shadow-lg
     transition-transform transform ${bgColor} text-white`} role="alert">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white hover:text-opacity-75">
          &times;
        </button>
      </div>
    </div>
  </>
};
export default Toast;