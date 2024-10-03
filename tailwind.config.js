// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan path ini benar
  ],
  theme: {
    extend: {
      fontFamily: {
        latto: ['"Latto"', "sans-serif"], // Menambahkan font Latto
      },
    },
    // Menetapkan font default
    fontFamily: {
      sans: ['"Latto"', "sans-serif"], // Ini menetapkan Latto sebagai font sans-serif default
    },
  },
  plugins: [],
};
