"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Diya Malhotra",
    review:
      "This ATS checker helped me improve my resume and get more interview calls.",
  },
  {
    name: "Rohan Sharma",
    review:
      "The keyword suggestions were incredibly accurate and useful.",
  },
  {
    name: "Ananya Singh",
    review:
      "Professional dashboard and detailed ATS analysis.",
  },
  {
    name: "Aman Gupta",
    review:
      "My ATS score improved from 62% to 91%.",
  },
  {
    name: "Sophia Taylor",
    review:
      "One of the best resume tools I have ever used.",
  },
  {
    name: "James Miller",
    review:
      "Very detailed recruiter-focused recommendations.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
            "
          >
            Loved By Job Seekers
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
            "
          >
            Thousands of professionals trust our ATS checker.
          </p>
        </div>

        {/* Masonry Grid */}

        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-6
          "
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                mb-6
                bg-white
                rounded-3xl
                border
                p-6
                break-inside-avoid
                shadow-sm
                hover:shadow-lg
                transition-all
              "
            >
              {/* Stars */}

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="mt-4 text-gray-600 leading-relaxed">
                {review.review}
              </p>

              {/* Name */}

              <h4 className="mt-4 font-semibold text-gray-900">
                {review.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}