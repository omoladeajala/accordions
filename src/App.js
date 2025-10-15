
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
  }, 
  {
    title: "What are you learning at the moment?",
    text: "JavaScript and React.",
  }  
];

export default function App() {
return (
  <div>
    <Accordion data={fags} />
  </div>
);
}

function Accordion({data}) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
          title={el.title} 
          text={el.text} 
          num={i} key={el.title}
      />))}
  </div>
  );
}

function AccordionItem({num, title, text}) {
  const [isOpen, setIsOpen] = useState(false); 

function handleToggle() {
  setIsOpen((isOpen) => !isOpen)
}
  return (
     <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
    <p className="numbe">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen ? "-" : "+" } </p>

    {isOpen && <div className="context-box">{text} </div>}
  </div>
  );
}
