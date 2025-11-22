import React from "react";

interface ContactProps {
    onClose: () => void;
}
const ContactModal: React.FC<ContactProps> = ({onClose}) => {
    return (
    <div className="fixed inset-0 flex items-center justify-center text-black">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gray-500" style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)' }} onClick={onClose} />
      
        {/* Modal content */}
        <div className="relative bg-gray-100 rounded-lg p-4 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form action="https://formspree.io/f/xqapzqwn" method="POST" className="space-y-4">
            <div>
              <label className="block font-medium">Your Name</label>
              <input type="text" name="name" required className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block font-medium">Your Email</label>
              <input type="email" name="email" required className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea name="message" required className="w-full p-2 border rounded-lg"></textarea>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button type="button" onClick={onClose} className="px-6 py-2 rounded-md text-white bg-red-600 hover:bg-red-400 hover:cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-400 hover:cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

    );
};

export default ContactModal;
