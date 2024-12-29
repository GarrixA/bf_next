import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    // Helvetica Neue Black (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueBlack.otf",
      weight: "900", // Black
      style: "normal",
    },
    // Helvetica Neue Black (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueBlackItalic.otf",
      weight: "900", // Black
      style: "italic",
    },
    // Helvetica Neue Bold (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueBold.otf",
      weight: "700", // Bold
      style: "normal",
    },
    // Helvetica Neue Bold (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueBoldItalic.otf",
      weight: "700", // Bold
      style: "italic",
    },
    // Helvetica Neue Heavy (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueHeavy.otf",
      weight: "800", // Heavy
      style: "normal",
    },
    // Helvetica Neue Heavy (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueHeavyItalic.otf",
      weight: "800", // Heavy
      style: "italic",
    },
    // Helvetica Neue Italic
    {
      path: "../../../public/fonts/HelveticaNeueItalic.ttf",
      weight: "400", // Regular
      style: "italic",
    },
    // Helvetica Neue Light (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueLight.otf",
      weight: "300", // Light
      style: "normal",
    },
    // Helvetica Neue Light (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueLightItalic.otf",
      weight: "300", // Light
      style: "italic",
    },
    // Helvetica Neue Medium (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueMedium.otf",
      weight: "500", // Medium
      style: "normal",
    },
    // Helvetica Neue Medium (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueMediumItalic.otf",
      weight: "500", // Medium
      style: "italic",
    },
    // Helvetica Neue Roman (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueRoman.otf",
      weight: "400", // Regular
      style: "normal",
    },
    // Helvetica Neue Thin (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueThin.otf",
      weight: "100", // Thin
      style: "normal",
    },
    // Helvetica Neue Thin (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueThinItalic.otf",
      weight: "100", // Thin
      style: "italic",
    },
    // Helvetica Neue Ultra Light (Normal)
    {
      path: "../../../public/fonts/HelveticaNeueUltraLight.otf",
      weight: "200", // Ultra Light
      style: "normal",
    },
    // Helvetica Neue Ultra Light (Italic)
    {
      path: "../../../public/fonts/HelveticaNeueUltraLightItalic.otf",
      weight: "200", // Ultra Light
      style: "italic",
    },
  ],
  variable: "--font-helvetica", // Use this variable in Tailwind
});

export { helvetica };
