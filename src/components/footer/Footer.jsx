import React from "react";
import Prefooter from "../prefooter/Prefooter";
import { useSelector } from "react-redux";

const Footer = () => {
  const info = useSelector((state) => state.info.info);

  return <footer>{info && <Prefooter data={info.es.prefooter} />}</footer>;
};

export default Footer;
