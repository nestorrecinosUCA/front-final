import { useState } from 'react';

function Example() {
        const [divEnabled, setDivEnabled] = useState(true);
      
        const handleIconClick = () => {
          setDivEnabled(!divEnabled);
        };
      
        return (
          <div>
            <button
              className={`p-2 bg-blue-500 text-white ${
                divEnabled ? 'opacity-50' : ''
              }`}
              onClick={handleIconClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {divEnabled ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
            
            <div
              className={`w-64 h-64 bg-red-500 mt-4 ${
                divEnabled ? '' : 'opacity-50'
              }`}
            >
              {divEnabled ? 'Div activado' : 'Div desactivado'}
            </div>
          </div>
  );
};

export default Example;