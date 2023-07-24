/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        colors: {
            'blue': {
                '50': '#f0f8fe',
                '100': '#dceefd',
                '200': '#c2e1fb',
                '300': '#97d0f9',
                '400': '#66b6f4',
                '500': '#4397ee',
                '600': '#2d7ae3',
                '700': '#2565d0',
                '800': '#2554ad',
                '900': '#234785',
                '950': '#1a2c51',
            },
            'orange': {
                '500': '#F77F00',
            },

        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}