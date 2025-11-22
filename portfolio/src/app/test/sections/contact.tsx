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
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-[var(--accent)] rounded-md hover:cursor-pointer"
            onClick={() => setContactModal(true)}
          >
            <p className="hover:underline">Send me an Email</p>
          </button>
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-[var(--accent-2)] rounded-md hover:cursor-pointer"
          >
            <a href="https://www.linkedin.com/in/tmk13" className="hover:underline"
            target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a>
          </button>
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-[var(--accent-3)] rounded-md hover:cursor-pointer"
          >
            <a href="https://www.github.com/tmkim" className="hover:underline"
            target="_blank" rel="noopener noreferrer">Check out my Github</a>
          </button>
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
