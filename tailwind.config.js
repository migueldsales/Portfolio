/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./dist/**/*.{html,js}"],
  theme: {
     extend: {
      colors:{
        primary: '#FABD06',
        dark: '#282828',
        black:'#1d1b1b',
        light: '#efefef',
        semigray: '#A8A8A8',
        gray: '#8B8B8B',
        bglight: '#f2f2f2',
        pink: '#f9cdcd'
      },
      fontFamily:{
        'Archivo Black' :['Archivo Black', 'sans-serif'],
        'Montserrat' :['Montserrat', 'sans-serif'],
      },
      backgroundImage:{
        'web-design-bg': "url('./img/web-design.jpg')",
        'web-dev-bg': "url('./img/web-dev.jpg')",
        'graphic-design-bg': "url('./img/graphic design.jpg')",
        'branding-bg': "url('./img/branding.jpg')",
        'uiux-design-bg': "url('./img/ui-ux-design.jpg')",
        'video-editing-bg': "url('./img/video-editing.jpg')",
        'amazon-ebc-bg': "url('./img/Amazon EBC.jpg')",
        'logo-design-bg': "url('./img/Logo Design.jpg')",
        'passion-project-web-bg': "url('./img/Passion Project-Web.png')",
        'contact-bg' : "url('./img/contact-bg.png')",
      }
    },
  },
  plugins: [],
}

