import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Oancea Ioan - Alin.pdf";
    link.download = "Oancea Ioan - Alin.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <motion.button
      onClick={downloadPDF}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.1 }}
      className="relative px-1 py-4 mt-5 text-sm text-center rounded-full font-extralight bg-radial from-lavender to-royal w-[12rem] cursor-pointer overflow-hidden z-10"
    >
      <AnimatePresence mode="wait">
        <p className="flex items-center justify-center gap-2">Download CV</p>
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadCVButton;
