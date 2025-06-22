"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";

const faqs = [
  {
    question: "Ho",
    answer: "yo!",
  },
  {
    question: "How are you?",
    answer: "I'm *`fine`*",
  },
  {
    question: "Do you play video games?",
    answer: "No, I play `audio games`.",
  },
  {
    question: "Are you a human?",
    answer: "No. I'm a ***homo-sapien***.",
  },
  {
    question: "Do you think you are an intellectual person?",
    answer: "It's the **fact**. Not a thought. 🗿",
  },
];

function FaqSection() {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("clicked on: ", e.currentTarget.textContent);
  };

  return (
    <section className="faq-section-container space-y-6 bg-gray-50/10 shadow dark:bg-white/5 px-10 py-6 rounded">
      <div>
        <h1 className="text-lg font-mono">Accordion Type: Single</h1>
        <p className="text-sm">Single Item can remain open at a time</p>
        <Accordion type="single">
          {faqs.map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={`faq-${index}`}>
              <div className="" onClick={handleClick}>
                <AccordionTrigger>
                  <ReactMarkdown>{faq.question}</ReactMarkdown>
                </AccordionTrigger>
              </div>
              <AccordionContent>
                <ReactMarkdown>{faq.answer}</ReactMarkdown>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="">
        <h1 className="text-lg font-mono">Accordion Type: Multiple</h1>
        <p className="text-sm">
          Multiple items can remain open at the same time
        </p>
        <p className="text-sm">Note: Collapsible must be false to use it</p>
        {/* collapsible should always be false when using type: mutiple */}
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={`faq-mulitple-${index}`}>
              <div className="" onClick={handleClick}>
                <AccordionTrigger>
                  <ReactMarkdown>{faq.question}</ReactMarkdown>
                </AccordionTrigger>
              </div>
              <AccordionContent>
                <ReactMarkdown>{faq.answer}</ReactMarkdown>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
