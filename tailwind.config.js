/** @type {import('tailwindcss').Config} */
export default {
  // Menentukan file yang akan dipindai oleh Tailwind untuk kelas CSS.
  // Ini termasuk file HTML dan JSX di dalam folder `src` dan `public`.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
