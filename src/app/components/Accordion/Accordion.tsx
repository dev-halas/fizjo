"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Accordion.module.css";
import sanitizeHtml from "sanitize-html";
import AccordionArrow from "/public/images/svg/accordion_arrow.svg";
import { SANITIZE_OPTIONS } from "../../utils/constans";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};


const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <motion.img
              src={AccordionArrow.src}
              alt="arrow"
              className={styles.arrowIcon}
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === index ? "auto" : 0,
              opacity: activeIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={styles.accordionContent}
          >
            <div
              className={styles.accordionText}
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(item.content, SANITIZE_OPTIONS),
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
