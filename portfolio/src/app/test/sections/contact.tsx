"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useState } from "react";
import ContactModal from '@/components/contact-modal';

export default function Contact() {
    const [contactModal, setContactModal] = useState<boolean>(false);
  
  return (
    <motion.div {...fadeUp} className="text-center space-y-4 p-6">
      <h2 className="text-4xl font-semibold">Let's Talk</h2>

      <p>
        I love connecting with people who build cool things.
      </p>

        <div className="mt-6 flex gap-4 text-black">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/tmk13"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              bg-[var(--accent-2)]
              rounded-xl
              shadow-sm
              p-4
              text-lg font-semibold
              flex items-center justify-center
              hover:cursor-pointer
            "
          >
            Connect on LinkedIn
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[var(--accent)] rounded-xl shadow-sm"
          >
            <button
              onClick={() => setContactModal(true)}
              className="
                w-full h-full
                flex items-center justify-center
                text-lg font-semibold
                rounded-md p-4
                hover:cursor-pointer
              "
            >
              Send me an Email
            </button>
          </motion.div>
        
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.github.com/tmkim"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              bg-[var(--accent-3)]
              rounded-xl
              shadow-sm
              p-4
              text-lg font-semibold
              flex items-center justify-center
              hover:cursor-pointer
            "
          >
            Check out my Github
          </motion.a>
        </div>

      {contactModal && (
        <div>
          <ContactModal 
          onClose={() => setContactModal(false)} 
          />
        </div>
      )}
    </motion.div>
  );
}
