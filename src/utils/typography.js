import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  color: '#15865E',
  googleFonts: [
    {
      name: 'Muli',
      styles: [
        '300',
        '400',
        '700'
      ],
    },
    {
      name: 'Source Sans Pro',
      styles: [
        '300',
        '400',
      ],
    },
  ],
  headerFontFamily: ["Source Sans Pro", "serif"],
  bodyFontFamily: ["Muli", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;