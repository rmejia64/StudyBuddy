export const footer_icons = {
  links: [
    () => {
      console.log("...Instagram icon clicked");
      alert("Instagram page coming soon!");
    },
    () => {
      console.log("...LinkedIn icon clicked");
      alert("LinkedIn page coming soon!");
    },
    () => {
      console.log("...Github icon clicked");
      alert("Github redirect coming soon!");
    },
  ],
  logos: [
    require("../assets/instagram.png"),
    require("../assets/linkedin.png"),
    require("../assets/github.png"),
  ],
};

export const features = {
  total: 2,
  icons: [
    require("../assets/notes.png"),
    require("../assets/pencil_book.png"),
    require("../assets/cards.png"),
    require("../assets/test.png"),
    require("../assets/time_test.png"),
    require("../assets/open_book.png"),
    require("../assets/certificate.png"),
    require("../assets/bell_plain.png"),
  ],
};

export const carousel_funcs = [
  () => {
    console.log("...carousel icon 1 clicked");
    alert("Upload your own pdfs!");
  },
  () => {
    console.log("...carousel icon 2 clicked");
    alert("Multple note styles e.g Linear, Pattern, Cornell, Flowcharts, etc!");
  },
  () => {
    console.log("...carousel icon 3 clicked");
    alert("Create and review flash card sets!");
  },
  () => {
    console.log("...carousel icon 4 clicked");
    alert("Create your own test questions!");
  },
  () => {
    console.log("...carousel icon 5 clicked");
    alert("Time your test taking");
  },
  () => {
    console.log("...carousel icon 6 clicked");
    alert("Annotate pdfs, slides, books, etc!");
  },
  () => {
    console.log("...carousel icon 7 clicked");
    alert(
      "Take offial Standardized test practice questions e.g SAT, PSAT, AP, IB, GRE, etc!"
    );
  },
  () => {
    console.log("...carousel icon 8 clicked");
    alert("Set up reminders and alerts!");
  },
];
