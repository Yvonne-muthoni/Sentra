import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white-700 text-black py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFA500]-400 text-sm md:text-base">
            &copy; 2024 Sentra Cord. All rights reserved.
          </p>
          <p className="text-[#FFA500]-500 text-sm md:text-sm mt-2">
            Reliable ICT & Smart Technology Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
