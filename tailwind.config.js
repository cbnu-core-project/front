/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      extend:{
        colors: {
          'main' : '#4200FF',
          'textColor' : '#4F4F4F',
          'buttonColorM': '#6360FF',
          'buttonColorS' : '#ECEDFB',
          'tegColor' : '#F4F4F4',
          'noticeColor' : '#F1F2FC',
          'opacity': 'bg-opacity-100'
        },
        
      }
      
  },
  plugins: [],
}
