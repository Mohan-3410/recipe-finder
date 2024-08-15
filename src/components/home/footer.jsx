import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="bg-muted py-5 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between text-muted-foreground">
          <div className="mb-8 md:mb-0">
            <h3 className="uppercase font-bold mb-5 text-foreground">Follow us</h3>
            <ul className="flex gap-4">
              <li className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary-foreground transition">
                <AiOutlineInstagram className="text-lg text-foreground " />
              </li>
              <li className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary-foreground transition">
                <AiOutlineFacebook className="text-lg text-foreground " />
              </li>
              <li className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary-foreground transition">
                <AiOutlineTwitter className="text-lg text-foreground " />
              </li>
              <li className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary-foreground transition">
                <AiOutlineMail className="text-lg text-foreground " />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-5 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary cursor-pointer transition">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Returns And Exchange Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Shipping Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="w-48 mx-auto md:mx-0">
            <img src="/creditcardicons.png" alt="Credit Card Icons" className="w-full" />
          </div>
          <p className="text-center mt-4 md:mt-0 text-muted-foreground">
            &copy; {new Date().getFullYear()} <strong>Recipe Finder.</strong> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
