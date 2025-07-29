const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full mt-2 mb-6 text-center text-gray-400 text-sm animate-fade-in">
      &copy; {new Date().getFullYear()} Contact Management App. Made with ❤️ by{" "}
      <a
        href="https://portfolio-umarusyahid.vercel.app/"
        target="_blank"
        className="text-sky-500 underline hover:text-sky-400"
      >
        Syahid
      </a>
    </footer>
  );
};

export default Footer;
