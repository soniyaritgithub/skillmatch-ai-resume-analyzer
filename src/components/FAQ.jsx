"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is ATS Score?",
    a: "ATS Score measures resume compatibility.",
  },
  {
    q: "How do I improve ATS score?",
    a: "Add keywords, skills and achievements.",
  },
  {
    q: "Is this ATS compliant?",
    a: "Yes, our analysis follows ATS best practices.",
  },
  {
    q: "Can I upload PDF resumes?",
    a: "Yes, PDF and DOCX supported.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-gray-900
          "
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="
                border
                rounded-2xl
                p-5
                cursor-pointer
                transition-all
                hover:shadow-md
              "
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">
                  {faq.q}
                </h3>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}