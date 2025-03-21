import data from "./data.jsx";

import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion() {
  const [activeItemId, setActiveItemId] = useState(null);

  const updateActiveId = (id) => {
    if (activeItemId === id) {
      setActiveItemId(null);
    } else {
      setActiveItemId(id);
    }
  };
  return (
    <ul className=" space-y-4 w-[90%] ">
      {data.map((item) => (
        <li key={item.id}>
          <AccordionItem
            onClick={updateActiveId}
            activeItemId={activeItemId}
            question={item.question}
            icon={item.icon}
                  answer={item.answer}
                  id={item.id}
          />
        </li>
      ))}
    </ul>
  );
}
