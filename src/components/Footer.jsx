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

          {/* Contact Info (UNCHANGED) */}
          <div className="mt-4 flex justify-center items-center gap-2 flex-wrap">

            <a
              href="mailto:info@sentracord.co.ke"
              className="hover:text-green-600 transition flex items-center"
            >
              <i className="fa-solid fa-envelope mr-1"></i>
              info@sentracord.co.ke
            </a>

            <span>|</span>

            <a
              href="tel:+254798467717"
              className="hover:text-green-600 transition flex items-center"
            >
              <i className="fa-solid fa-phone mr-1"></i>
              +254 798 467 717
            </a>

          </div>


          {/* ✅ Social Icons (WhatsApp added FIRST) */}
          <div className="flex justify-center gap-4 mt-4">

            {/* ✅ WhatsApp FIRST */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://wa.me/254798467717"
              target="_blank"
              className="text-green-500 text-xl"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
              className="text-blue-700 text-xl"
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              className="text-blue-600 text-xl"
            >
              <i className="fa-brands fa-facebook"></i>
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              className="text-pink-500 text-xl"
            >
              <i className="fa-brands fa-instagram"></i>
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://tiktok.com"
              target="_blank"
              className="text-black text-xl"
            >
              <i className="fa-brands fa-tiktok"></i>
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              className="text-black text-xl"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </motion.a>

          </div>


          {/* Existing text (unchanged) */}
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