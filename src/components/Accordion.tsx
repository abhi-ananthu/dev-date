"use client"
import Image from "next/image";
import { useState } from "react";

const Accordion = ({className, sections}:{
    className?: any,
    sections: Array<{ title: string; content: string }>
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <div className={className.accordion_list}>
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={className.accordion_item} onClick={() => toggleAccordion(index)}>
            <div className={className.accordion_header}>
            <h4 className={className.accordion_title}>{section.title}</h4>
            <Image
              src="/images/arrow-down.svg"
              alt="Expand"
              width={10}
              height={10}
              className={`${className.accordion_icon} ${isOpen ? className.accordion_icon_open : ''}`}
            />
            </div>
            <p
                className={`${className.accordion_content} ${isOpen ? className.accordion_content_open : ''}`}
              >
                {section.content}
              </p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Accordion
