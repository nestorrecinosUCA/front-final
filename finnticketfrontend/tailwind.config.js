/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'finnticket': {
           'primary' : '#393E46',
           'primary-focus' : '#4506cb',
           'primary-content' : '#EEEEEE',

           'secondary' : '#f000b8',
           'secondary-focus' : '#bd0091',
           'secondary-content' : '#EEEEEE',

           'accent' : '#37cdbe',
           'accent-focus' : '#2ba69a',
           'accent-content' : '#EEEEEE',

           'neutral' : '#3b424e',
           'neutral-focus' : '#2a2e37',
           'neutral-content' : '#EEEEEE',

           'base-100' : '#222831',
           'base-200' : '#393E46',
           'base-300' : '#393E46',
           'base-content' : '#EEEEEE',

           'info' : '#EEEEEE',
           'success' : '#009485',
           'warning' : '#FFD369',
           'error' : '#ff5724',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },

}

