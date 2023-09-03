module.exports = {
  ...require("ui/tailwind.config"),
  theme: {
    ...require("ui/tailwind.config").theme,
    fontSize: {
      ...require("ui/tailwind.config").theme.fontSize,
      xs: "0.75rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
    },
  },
};
