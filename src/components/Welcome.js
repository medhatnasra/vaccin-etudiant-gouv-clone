import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Welcome() {
  return (
    <div className="container">
      <motion.div
        className="welcome-container"
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1.5,
          delay: 0.75,
        }}
        exit={{
          x: "-500vw",
          transition: { ease: "easeInOut", duration: 1 },
        }}
      >
        <div className="part1"></div>
        <div className="welcome-text">
          <h1>
            التسجيل لتلقي التلقيح ضد فيروس كورونا (الرابط الخاص بالطلبة
            التونسيين)
          </h1>
          <h5>
            هذا الرابط يخص الطلبة الذين سيدرسون بالجامعات التونسية ومخابر البحث
            في السنة الجامعية 2021-2022
          </h5>
          <h5>يفتح التسجيل يوم 04 أوت 2021</h5>
          <h5>يغلق التسجيل يوم 10 أوت على الساعة 6 مساءً</h5>
          <h5>الرجاء التثبت من جميع المعلومات المدرجة بإستمارة التسجيل</h5>

          <button>
            <Link to="/register">سجل الآن</Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;
