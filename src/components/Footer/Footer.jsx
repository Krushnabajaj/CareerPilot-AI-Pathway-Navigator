import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <ul class="flex flex-wrap items-center mt-3 text-base font-medium text-black dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/about" class="hover:underline me-4 ">
            About Us
          </Link>
        </li>
      </ul>
      <span class="text-base text-black sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link to="/" class="hover:underline">
          CareerPilot
        </Link>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-base font-medium text-black dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/contact" class="hover:underline me-4">
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
