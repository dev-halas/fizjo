"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Accordion.module.css";
import sanitizeHtml from "sanitize-html";
import AccordionArrow from "/public/images/svg/accordion_arrow.svg";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const allowedTags = ["p", "strong", "a", "ul", "li", "em", "br", "h1", "h2", "h3", "h4", "h5", "h6"]

const sanitizeOptions = {
  allowedTags,
  allowedAttributes: {
    a: ["href", "target", "rel"],
  },
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
                __html: sanitizeHtml(item.content, sanitizeOptions),
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
