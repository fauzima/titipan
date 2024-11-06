import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        noise: "noise 1s infinite",
      },
      keyframes: {
        noise: {
          "0%": { backgroundImage: "url('../../public/noise0.png')" },
          "10%": { backgroundImage: "url('../../public/noise1.png')" },
          "20%": { backgroundImage: "url('../../public/noise2.png')" },
          "30%": { backgroundImage: "url('../../public/noise3.png')" },
          "40%": { backgroundImage: "url('../../public/noise4.png')" },
          "50%": { backgroundImage: "url('../../public/noise5.png')" },
          "60%": { backgroundImage: "url('../../public/noise6.png')" },
          "70%": { backgroundImage: "url('../../public/noise7.png')" },
          "80%": { backgroundImage: "url('../../public/noise8.png')" },
          "90%": { backgroundImage: "url('../../public/noise9.png')" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
