/* eslint-disable */
export default {
  colors: {
    text: "#000",
    background: "#FFF",
    accent: "#4EA4D9",
    myblue: "#5224E3",
    myyellow: "#F8de58",
    mygray: "#f5f5f7",
  },
  fonts: {
    body: "Montserrat, Kosugi, sans-serif",
    heading: "Montserrat, Kosugi, sans-serif",
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    a: {
      color: "tomato",
    },
  },
  buttons: {
    primary: {
      backgroundColor: "myblue",
      borderStyle: "solid",
      borderColor: "myblue",
      borderWidth: "1px",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "black",
      },
    },
    nav: {
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        color: "myblue",
      },
    },
  },
  shadows: {
    card: "0px 10px 10px -5px rgba(0, 0, 0, 0.125)",
  },
  variants: {
    nav: {
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "myblue",
      },
    },
  },
};
