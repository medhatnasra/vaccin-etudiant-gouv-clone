import React from "react";

import logo from "../images/Logo.png";
import Tunisie from "../images/tunisie.png";

import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <motion.img
        src={Tunisie}
        alt=""
        className="tunisie"
        animate={{ x: 0, opacity: 1, scale: [0.3, 1] }}
        initial={{ x: "100vw", opacity: 0.4, scale: 0 }}
        transition={{ delay: 0.5, times: [0, 1] }}
      />
      <motion.div
        className="header-text"
        animate={{ y: 0, opacity: 1, scale: [0.7, 0.7, 1] }}
        initial={{ y: "-100vh", opacity: 0.4, scale: 0 }}
        transition={{ delay: 1.5, times: [0, 0.5, 1] }}
      >
        <h3> الجمهورية التونسية </h3>
        <h2>وزارة التعليم العالي و البحث العلمي </h2>
      </motion.div>

      <motion.img
        src={logo}
        alt=""
        className="logo"
        animate={{ x: 0, opacity: 1, scale: [0.3, 1] }}
        initial={{ x: "-100vw", opacity: 0.4, scale: 0 }}
        transition={{ delay: 0.5, times: [0, 1] }}
      />
    </header>
  );
}

export default Header;
