import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Resources = [
  "About Us",
  "Careers",
  "Team",
];
const Plans = ["Help & Support ", "Partner With Us"];
const Community = ["Terms & Conditions", "Cookie policy", "Privacy policy"];
const Contact = ["Jaipur", "Delhi", "Patna", "Muzaffarpur", "Darbhanga"];

const Footer = () => {
  return (
    <div className="bg-neonorange-900">
      <div className="flex lg:flex-col gap-9 items-center justify-between max-w-7xl w-11/12 text-neonorange-400 leading-8 mx-auto relative py-14">
        <div className="border-b w-full flex flex-col lg:flex-row pb-10 border-neonorange-700">
          {/* Section 1 */}
          <div className="flex flex-wrap flex-row justify-between gap-8 lg:gap-12 pl-1 pr-1 w-full">
            {/* Logo + copyright */}
            <div className="min-w-[220px] max-w-[280px] flex flex-col gap-3 mb-7">
              <img src="https://dummyimage.com/200x200/111827/ffffff&text=TT" alt="Taste & Trial" className="object-contain rounded-full w-48 h-48" />
              <div className="text-richblacneonorange-50 text-xl">© 2025 Taste And Trial</div>
            </div>

            {/* Company + Legal */}
            <div className="min-w-[220px] mb-10">
              <h2 className="text-neonorange-50 font-semibold text-[26px]">Company</h2>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-neonorange-50 transition-all duration-200"
                    >
                      <a href={`/${ele.split(" ").join("-").toLowerCase()}`}>
                        {ele}
                      </a>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-richblack-50 font-semibold text-[26px] mt-7">Legal</h2>

              <div className="flex flex-col gap-3 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-neonorange-50 transition-all duration-200"
                    >
                      <a href={`/${ele.split(" ").join("-").toLowerCase()}`}>
                        {ele}
                      </a>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Contact + Available in */}
            <div className="min-w-[220px] mb-7">
              <h2 className="text-richblack-50 font-semibold text-[26px]">Contact Us</h2>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-neonorange-50 transition-all duration-200"
                    >
                      <a href={`/${ele.split(" ").join("-").toLowerCase()}`}>
                        {ele}
                      </a>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Available in */}
            <div className="min-w-[220px] mb-7">
              <h2 className="text-richblack-50 font-semibold text-[26px]">Available in:</h2>

              <div className="flex flex-col gap-2 mt-2">
                {Contact.map((ele, index) => (
                  <div key={index} className="text-[14px] cursor-pointer hover:text-neonorange-50 transition-all duration-200">
                    <a href={`/${ele.split(" ").join("-").toLowerCase()}`}>{ele}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="min-w-[220px] mb-7">
              <h2 className="text-richblack-50 font-semibold text-[26px]">Social Links:</h2>
              <div className="flex items-center gap-3 mt-3">
                <ul className="flex space-x-4">

                  <li>{" "} <FaFacebook className="text-blue-500 rounded-full" size={58} /> {" "}
                  <a href="https://www.facebook.com/share/1CzVC5Dzgb/ " className="hover:underline text-gray-300">Facebook</a></li>

                  <li>{" "} <FaInstagramSquare className=" w-[58px] h-[58px] bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4]" size={58} /> {" "}
                  <a href="https://www.instagram.com/foods_tnt?igsh=dWptYzdkZWtpcDdq " className="hover:underline text-gray-300">Instagram</a></li>

                  <li>{" "} <FaXTwitter className="text-black  rounded-full" size={58} /> {" "}
                  <a href=" " className="hover:underline text-gray-300 ">XTwitter</a></li>

                  <li>{" "} <FaLinkedin className="text-blue-500" size={58} /> {" "}
                  <a href=" " className="hover:underline text-gray-300 ">Linkedin</a></li>

                  <li>{" "} <FaYoutube className="text-[#FF0000]  rounded-full" size={58} /> {" "}
                  <a href="https://youtube.com/@tasteandtrial?feature=shared " className="hover:underline text-gray-300">Youtube</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom CTA row */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-7xl text-neonorange-50 mx-auto pt-8 pb-6 gap-6">
        <div className="text-center lg:text-left text-xl">
          For better experience, download the Taste And Trial app now
        </div>
        <div className="flex items-center gap-3">
          <a href="https://play.google.com/store" aria-label="Google Play" target="_blank" rel="noreferrer noopener"><img className="h-12" alt="Get it on Google Play" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" /></a>
          <a href="https://www.apple.com/app-store/" aria-label="App Store" target="_blank" rel="noreferrer noopener"><img className="h-12" alt="Download on the App Store" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" /></a>
          <a href="https://www.indusappstore.com/" aria-label="Indus Appstore" target="_blank" rel="noreferrer noopener"><img className="h-12" alt="Download on the Indus Appstore" src="https://d1nxzqpcg2bym0.cloudfront.net/google-indus/indus-appstore-badge.svg" /></a>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Footer;