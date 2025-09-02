import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { personalEmail } from "../constants/index.js";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.1 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={copied ? "copied" : "copy"}
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <img
            src={copied ? "/assets/copy-done.svg" : "/assets/copy.svg"}
            alt={copied ? "copied" : "copy"}
            className="w-5"
          />
          {copied ? "Email has Copied" : "Copy Email Address"}
        </motion.p>
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
