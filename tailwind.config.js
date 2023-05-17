/** @type {import('tailwindcss').Config} */
/*eslint-disable */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   blue: "#1fb6ff",
    // },
    // fontFamily: {
    //   sans: [
    //     '"Segoe UI Symbol"',
    //     "Roboto",
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     "system-ui",
    //     '"Noto Color Emoji"',
    //   ],
    //   serif: [
    //     "Georgia",
    //     "ui-serif",
    //     "Cambria",
    //     '"Times New Roman"',
    //     "Times",
    //     "serif",
    //   ],
    //   mono: [
    //     "ui-monospace",
    //     "SFMono-Regular",
    //     "Menlo",
    //     "Monaco",
    //     "Consolas",
    //     '"Liberation Mono"',
    //     '"Courier New"',
    //     "monospace",
    //   ],
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
