import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Necmi Gündüz. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg">
          <a
            href="https://www.linkedin.com/in/necmigunduz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/apeconomicstutoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@necmigunduz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            YouTube
          </a>
          <a
            href="mailto:necmigunduz@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
