import {
  airpodsImg,
  appleWatchImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    macImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const highlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
export const significantOthers = [
  {
    id: 1,
    title: "iPhone & Apple Watch",
    text: "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.17 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
    img: appleWatchImg
   },
  {
    id: 1,
    title: "iPhone & Mac",
    text: "You can answer calls or messages from your iPhone directly on your Mac. Copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And with iCloud, you can access your favorite files from either your iPhone or Mac.",
    img: macImg
   },
  {
    id: 1,
    title: "iPhone & Airpods",
    text: "Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control to provide the best listening experience across different environments and interactions throughout the day.",
    img: airpodsImg
   },
 ]
  
 
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];