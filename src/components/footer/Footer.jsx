import React from "react";
import Prefooter from "../prefooter/Prefooter";
import { useSelector } from "react-redux";

const Footer = () => {
  const info = useSelector((state) => state.info.info);
  const lang = useSelector((state) => state.info.language);

  return <footer>{info && <Prefooter data={info[lang].prefooter} />}</footer>;
};

export default Footer;
