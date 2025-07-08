module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto-serif': ['Roboto Serif', 'serif'],
      },
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          background7: "var(--global-bg-7)",
          background8: "var(--global-bg-8)",
          background9: "var(--global-bg-9)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)",
          text8: "var(--global-text-8)",
          text9: "var(--global-text-9)",
          text10: "var(--global-text-10)",
          text11: "var(--global-text-11)",
          text12: "var(--global-text-12)",
          text13: "var(--global-text-13)",
          text14: "var(--global-text-14)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)"
        },
        slider: {
          background1: "var(--slider-bg-1)",
          background2: "var(--slider-bg-2)",
          background3: "var(--slider-bg-3)",
          background4: "var(--slider-bg-4)",
          text1: "var(--slider-text-1)",
          text2: "var(--slider-text-2)"
        },
        button: {
          background1: "var(--button-bg-1)",
          text1: "var(--button-text-1)",
          text2: "var(--button-text-2)",
          text3: "var(--button-text-3)"
        },
        pager: {
          background1: "var(--pager-bg-1)",
          background2: "var(--pager-bg-2)"
        },
        edittext: {
          text1: "var(--edittext-text-1)"
        },
        footer: {
          background1: "var(--footer-bg-1)",
          text1: "var(--footer-text-1)"
        }
      }
    }
  },
  plugins: []
};