import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 bg-black border-t border-neutral-800">
      <div className="flex items-center justify-center gap-4 mb-2">
        <a
          href="https://www.instagram.com/_.sriramnaidu._/?igsh=MXBpNDVtczBuMGFiaA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="inline-flex items-center justify-center"
        >
          <FaInstagram className="text-neutral-400 hover:text-pink-500 transition-colors text-xl" />
        </a>
      </div>
      <p className="text-sm text-neutral-400">
        {new Date().getFullYear()} Sriram Vissakoti. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;