import { FaRegMoon } from "react-icons/fa"; 
import { BiSun } from "react-icons/bi"; 
import { AiFillLinkedin, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_ikeqtbm',
      'template_4pycajo',  
      e.target,
      'nR9iMBkpboGcs-Nu2'  
    )
    .then(() => {
      setIsSubmitted(true);
      setLoading(false);
      e.target.reset();
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      alert("Gagal mengirim email");
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-100 dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-900 dark:text-white">

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden relative border border-slate-200 dark:border-slate-800">

        <div className="flex justify-between items-center px-8 pt-8">
          <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-medium group">
            <AiOutlineArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform"
          >
            {darkMode ? <BiSun size={20} className="text-yellow-400" /> : <FaRegMoon size={20} className="text-slate-600" />}
          </button>
        </div>

        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Punya proyek menarik atau sekadar ingin menyapa? Saya siap membantu mewujudkan ide Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 mb-4">
                  <AiOutlineMail size={24} />
                </div>
                <h3 className="font-bold text-lg">Email Me</h3>
                <p className="text-sm text-slate-500 mt-1">ghifarom@gmail.com</p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 mb-4">
                  <BiMap size={24} />
                </div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-sm text-slate-500 mt-1">Karawang, West Java</p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href='https://www.linkedin.com/in/muhammad-ghifar-ramdhani/' className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-yellow-400 hover:text-slate-900">
                  <AiFillLinkedin size={20} />
                </a>
                <a href='https://github.com/ghifar1327' className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-yellow-400 hover:text-slate-900">
                  <BsGithub size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="text-center p-8 bg-green-100 rounded-3xl">
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2">Email berhasil dikirim 🚀</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input name="user_name" required placeholder="Your Name" className="w-full p-4 rounded-2xl border" />

                  <input name="user_email" required type="email" placeholder="Email" className="w-full p-4 rounded-2xl border" />

                  <input name="subject" placeholder="Subject" className="w-full p-4 rounded-2xl border" />

                  <textarea name="message" required placeholder="Message..." className="w-full p-4 rounded-2xl border"></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center gap-2 bg-yellow-400 py-3 rounded-2xl font-bold"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <BsFillSendFill />
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>

        <footer className="pb-12 text-center text-slate-400 text-sm">
          ©Muhammad Ghifar Ramdhani 2026 All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;