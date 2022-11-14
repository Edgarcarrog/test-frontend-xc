import React from "react";
import PrefooterMobile from "../prefooter/PrefooterMobile";
import { useSelector } from "react-redux";

const FooterMobile = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return (
    <footer>
      {info && (
        <>
          <PrefooterMobile data={info[lang].prefooter} />
          <div className="bg-black text-[#a1a1a1] text-xs text-center  leading-5">
            <div className="w-[75%] mx-auto py-[10px]">
              <p>{info[lang].footer.copy}</p>
              <div className="flex justify-between gap-12 text-gray5">
                {info[lang].footer.links.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.tittle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default FooterMobile;
