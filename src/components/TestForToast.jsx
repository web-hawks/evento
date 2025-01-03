import React from 'react'
import Toast from './Toast';
export default function TestForToast() {
  const [toast, setToast] = useState({ message: '', type: '', visible: false });
  const showToast = (message, type) => {
    setToast({ message, type, visible: true });

    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000); // hide after 3 seconds
  }
 
  return <>
  
  
  <div className="min-h-screen flex items-center justify-center
     bg-gray-100 p-4">
      <button 
        onClick={() => showToast('Success! Your action was successful.', 'success')}
        className="bg-green-500 text-white py-2 px-4 rounded mr-2"
      >
        Success Toast
      </button>
      <button 
        onClick={() => showToast('Error! Something went wrong.', 'error')}
        className="bg-red-500 text-white py-2 px-4 rounded mr-2"
      >
       Error Toast
      </button>
      <button 
        onClick={() => showToast('Info! Hello .', 'info')}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Info Toast
      </button>

      {toast.visible && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, visible: false })} 
        />
      )}
    </div>
  
  </>
}
