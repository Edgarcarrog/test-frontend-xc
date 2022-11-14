import React from "react";
import Prefooter from "../prefooter/Prefooter";
import { useSelector } from "react-redux";

const Footer = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <footer>
      {info && (
        <>
          <Prefooter data={info[lang].prefooter} />
          <div className="bg-black text-white h-[40px]">
            <div className="grid grid-cols-12 gap-4 max-w-[1800px] mx-auto leading-[40px]">
              <div className="flex justify-between col-start-3 col-span-8 text-white text-[12px]">
                <p className="text-gray4">{info[lang].footer.copy}</p>
                <div className="flex gap-12 text-gray5">
                  {info[lang].footer.links.map((link, index) => (
                    <a key={index} href={link.href}>
                      {link.tittle}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
