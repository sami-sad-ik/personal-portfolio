import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const formData = new FormData(form);

    const accessKey = import.meta.env.VITE_WEB_ACCESS_KEY;

    formData.append("access_key", accessKey);

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        toast.error(data.message || "Failed to submit the form");
      }
    } catch (err) {
      console.error("Network/Error:", err);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="mt-10 w-full bg-base-300 py-12">
      <h2 className="py-6 text-4xl text-center font-bold">Contact</h2>
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div className="w-1/2 mx-auto flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <a
              href="tel:+8801632350530"
              className="flex items-center gap-2 text-lg w-fit">
              <FiPhone size={20} />
              <span className="hover:text-blue-500 transition-colors">
                +8801632350530
              </span>
            </a>
            <a
              href="mailto:samisadik530@gmail.com"
              className="flex items-center gap-2 text-lg w-fit">
              <SiGmail size={20} />
              <span className="hover:text-blue-500 transition-colors">
                samisadik530@gmail.com
              </span>
            </a>
          </div>
          <div className="w-fit flex justify-between items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sami-sadik"
              target="_blank"
              className="hover:text-blue-500 transition-colors">
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://github.com/sami-sad-ik"
              target="_blank"
              className="hover:text-orange-500 transition-colors">
              <FaGithub size={35} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-1/2">
          <label class="sr-only" for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            class="w-full mb-4 px-4 py-2 rounded-lg border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <label class="sr-only" for="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            class="w-full mb-4 px-4 py-2 rounded-lg border placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <label class="sr-only" for="message">
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            placeholder="Write your message..."
            class="w-full mb-4 px-4 py-2 rounded-lg border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"></textarea>

          <div class="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              class="disabled:cursor-not-allowed px-5 py-2 rounded-lg bg-amber-500 font-semibold hover:bg-amber-600 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
