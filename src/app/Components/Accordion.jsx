"use client";
import React from "react";
import { faqs } from "@/constants";
import Item from "./Item";
import { useState } from "react";

const Accordion = () => {
  const [active, setActive] = useState();
  console.log(active);
  const toggle = (index) => {
    if (active === index) {
      setActive(null);
    }
    setActive(index);
  };

  return (
    <div>
      <div>
        {faqs.map((data, i) => (
          <Item
            key={i}
            question={data.question}
            answer={data.answer}
            onClick={() => toggle(i)}
            active={active}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
