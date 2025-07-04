/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFF4FA',
        'secendory': '#1BBF00',
        'third':'#141135',
        'four':'#726E9E',
        'five':'#F6F5FF',
        'six':'#F9F9FB'
      },
      fontFamily: {
        'open': ['open sans'],
        'paprika': ['Paprika'],
        'nunito': ['Nunito'],
        'quicksand':['Quicksand']
       
        
      },
      maxWidth: {
        'container': '1170px',
      },
      backgroundImage: {
        'banner': "url('./assets/bg.png')",
        'aboutprofile': "url('./assets/12861.png')",
       
        

      
    },
    spacing: {
      '100': '100px',
    },
  
    },
  },

  plugins: []

}
