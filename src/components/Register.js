import React from "react";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="register-page">
      <motion.div
        className="form-container"
        animate={{ x: "0", opacity: 1 }}
        initial={{ x: "500vw", opacity: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.25,
        }}
        exit={{
          scale: 0.9,
          x: "300vw",
          transition: { ease: "easeInOut", duration: 1 },
        }}
      >
        <div className="part1">
          <h1>
            التسجيل لتلقي التلقيح ضد فيروس كورونا (الرابط الخاص بالطلبة
            التونسيين)
          </h1>
        </div>
        <form onSubmit={handleSubmit(onsubmit)} action="/">
          <label>الاسم و اللقب</label>
          <input
            {...register("Name", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.Name && (
            <p style={{ color: "red" }}>الرجاء التثبت جيداً من الاسم و اللقب</p>
          )}

          <label>تاريخ الولادة</label>
          <input
            type="datetime"
            name="date"
            {...register("Date", {
              required: true,
              maxLength: 40,
            })}
          />
          {errors.Date && (
            <p style={{ color: "red" }}>الرجاء التثبت جيداً من تاريخ الولادة</p>
          )}
          <label>الجامعة أو الادارة أو الهيكل</label>
          <select
            name="gouv"
            id="gouv"
            {...register("gouv", {
              required: "الرجاء التثبت جيداً من الجامعة أو الادارة أو الهيكل ",
            })}
          >
            <option value="">-- اختيار --</option>
            <option value="1">تونس</option>
            <option value="2">أريانة</option>
            <option value="3">بن عروس</option>
            <option value="4">زغوان</option>
            <option value="5">منوبة</option>
            <option value="6">بنزرت</option>
            <option value="7">باجة</option>
            <option value="8">جندوبة</option>
            <option value="9">الكاف</option>
            <option value="10">سليانة</option>
            <option value="11">القصرين</option>
            <option value="12">سيدي بوزيد</option>
            <option value="13">قفصة</option>
            <option value="14">توزر</option>
            <option value="15">قبلي</option>
            <option value="16">تطاوين</option>
            <option value="17">مدنين</option>
            <option value="18">قابس</option>
            <option value="19">صفاقس</option>
            <option value="20">القيروان</option>
            <option value="21">المهدية</option>
            <option value="22">المنستير</option>
            <option value="23">سوسة</option>
            <option value="24">نابل</option>
          </select>
          {errors.gouv && <p style={{ color: "red" }}>{errors.gouv.message}</p>}
          <label>بطاقة التعريف الوطنية</label>
          <input
            type="number"
            name="cin"
            {...register("cin", {
              required: true,
              minLength: 8,
              maxLength: 8,
            })}
          />
          {errors.cin && (
            <p style={{ color: "red" }}>
              الرجاء التثبت جيداً من بطاقة التعريف الوطنية
            </p>
          )}
          <label>رقم الهاتف الجوال</label>
          <input
            type="text"
            name="phone"
            {...register("phone", {
              required: true,
              minLength: 8,
              maxLength: 8,
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>
              الرجاء التثبت جيداً من رقم الهاتف الجوال
            </p>
          )}

          <label>
            رمزالتسجيل على منظومة Evax.tn (9 أرقام) * الرجاء التثبت جيداً من رقم
            التسجيل
          </label>
          <input
            type="text"
            name="evax"
            {...register("evax", {
              required: true,
              minLength: 9,
              maxLength: 9,
            })}
          />
          {errors.evax && (
            <p style={{ color: "red" }}> الرجاء التثبت جيداً من رقم التسجيل</p>
          )}
          <label>أمراض مزمنة أو خطيرة</label>
          <select
            name="maladies"
            id="maladies"
            {...register("maladies", {
              required: "الرجاء التثبت جيداً من  أمراض مزمنة أو خطيرة    ",
            })}
          >
            <option value="">-- اختيار --</option>
            <option value="2">لا</option>
            <option value="1">نعم</option>
          </select>
          {errors.maladies && (
            <p style={{ color: "red" }}>{errors.maladies.message}</p>
          )}

          <label>هل أصبت بفيروس كورونا؟</label>

          <select
            name="corona"
            id="corona"
            {...register("corona", {
              required: "الرجاء التثبت جيداً هل أصبت بفيروس كورونا؟ ",
            })}
          >
            <option value="">-- اختيار --</option>
            <option value="2">لا</option>
            <option value="1">نعم</option>
          </select>
          {errors.corona && (
            <p style={{ color: "red" }}>{errors.corona.message}</p>
          )}

          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              minLength: 8,
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>
              {" "}
              الرجاء التثبت جيداً من البريد الإلكتروني{" "}
            </p>
          )}
          <p className="confirm">أتعهد بصحة المعلومات أعلاه</p>
          <button type="submit">تسجيل </button>
        </form>
        <Link to="/">عودة الى الصفحة الرئيسية</Link>
      </motion.div>
    </div>
  );
}

export default Register;
