import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sourav Behera",
      role: "Property Buyer",
      content:
        "ChandramaRealcon helped me find a beautiful plot near Patia, Bhubaneswar. The whole process was transparent and hassle-free. Truly impressed!",
      avatar:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    },
    {
      name: "Ananya Rout",
      role: "Property Seller",
      content:
        "I sold my land in Cuttack within a month through ChandramaRealcon. Their team was very supportive and handled everything professionally.",
      avatar:
        "https://img.freepik.com/premium-photo/portrait-young-indian-woman-happy-with-internship-human-resources-opportunity-mission-vision-company-values-goals-face-headshot-gen-z-person-with-hr-job-about-us-faq_590464-134290.jpg",
    },
    {
      name: "Debasish Nayak",
      role: "Investor",
      content:
        "I invested in a property near Khordha suggested by ChandramaRealcon, and it has already appreciated well. Their local market insight is excellent.",
      avatar:
        "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg",
    },
  ];

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setContainerWidth(container.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[rgb(245,220,65)] mb-12">
          What Our Clients Say
        </h2>

        <div
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            ref={containerRef}
            animate={{
              x: [0, -containerWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black border border-[rgb(245,220,115)] p-6 rounded-xl mr-8 flex-shrink-0 relative text-yellow-100
                w-[85%] sm:w-[45%] lg:w-[30%]" // ✅ responsive widths
                style={{
                  boxShadow:
                    "0 10px 30px rgba(255, 215, 0, 0.25), 0 4px 12px rgba(255, 215, 0, 0.15)",
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-[rgb(245,220,115)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-yellow-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-yellow-100 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smoother edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
