/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
=======
  important: true,
>>>>>>> 4368cb075f8a458cf1618e319f0d251a2a34f7f3
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        128: "32rem",
        112: "26rem",
      },
      inset: ["group-hover"],
      transitionDelay: ["group-hover"],
    },
  },
  plugins: [],
};
