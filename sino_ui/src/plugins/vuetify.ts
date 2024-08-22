/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          primary: "#1976D2",
        },
      },
    },
  },
  defaults: {
    global: {
      style: {
        fontFamily: "PT serif, open sans, Quicksand, Roboto, sans-serif", // Add your custom font family here
      },
    },
  },
});
