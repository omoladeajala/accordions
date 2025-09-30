import React from "react";
import './App.css';
import { useState } from "react";

const fags = [
  {
    title: "Where are these chairs assemble?",
    text: "Where they are meant to be.",
  },
  {
    title: "How long do i have to return the chairs?",
    text: "You have just an hour!",
  },
  {
    title: "Do you ship to country outside EU?",
    text: "Yes of course.",
  }
];
export default function App() {
return (
  <div>
    <Accordion />
  </div>
);
}

function Accordion() {
  return <div>TODO</div>
}

function AccordionItem({num, title, text}) {
  return <div className='item'>
    <p className='number'>{num}</p>
  </div>
}
