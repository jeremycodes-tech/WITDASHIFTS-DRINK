import { asset } from "../utils/assets.js";
const flavorlists = [
  {
    name: "Mango iced",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "RASPBERRY LEMONADE",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "PEACH STORM",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "TROPICAL VOLTAGE",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "LIME CHILL",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "BLACKBERRY SURGE",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Sodium", amount: "200mg" },
  { label: "Phosphorus", amount: "230mg" },
  { label: "Zinc", amount: "2mg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const cards = [
  {
    src: asset("videos/f1.mp4"),
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: asset("images/p1.png"),
    translation: "translate-y-[-5%]",
  },
  {
    src: asset("videos/f2.mp4"),
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: asset("images/p2.png"),
  },
  {
    src: asset("videos/f3.mp4"),
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: asset("images/p3.png"),
    translation: "translate-y-[-5%]",
  },
  {
    src: asset("videos/f4.mp4"),
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: asset("images/p4.png"),
    translation: "translate-y-[5%]",
  },
  {
    src: asset("videos/f5.mp4"),
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: asset("images/p5.png"),
  },
  {
    src: asset("videos/f6.mp4"),
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: asset("images/p6.png"),
    translation: "translate-y-[5%]",
  },
  {
    src: asset("videos/f7.mp4"),
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: asset("images/p7.png"),
    translation: "translate-y-[10%]",
  },

];

export { flavorlists, nutrientLists, cards };
