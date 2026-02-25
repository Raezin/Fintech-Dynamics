'use client'

import { motion } from 'framer-motion';

export default function GoogleMapComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden shadow-xl"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53170.928055167715!2d73.0764215!3d33.6005559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4555457c9430b6fd%3A0x794f73465b5e1871!2sFintech%20Dynamics%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1772052401474!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}