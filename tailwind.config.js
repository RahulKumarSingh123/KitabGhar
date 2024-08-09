/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#4834DF",
                darksecondary: '#25CCF7',
                secondary: "#0ABDE3",
                darkprimary: '#3C40C6'
            }
        },
    },
    plugins: [],
}