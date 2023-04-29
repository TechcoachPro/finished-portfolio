import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoReddit,
  IoLogoStackoverflow,
  IoLogoTwitter,
} from "react-icons/io5";
import Container from "./Container";

function Footer() {
  return (
    <div className="bg-black">
      <Container>
        <div className="py-8 flex items-center justify-center flex-col gap-y-3">
          <div className="flex items-center space-x-2 justify-center">
            <IoLogoGithub size={25} className="fill-slate-200" />
            <IoLogoReddit size={25} className="fill-slate-200" />
            <IoLogoStackoverflow size={25} className="fill-slate-200" />
            <IoLogoLinkedin size={25} className="fill-slate-200" />
            <IoLogoInstagram size={25} className="fill-slate-200" />
            <IoLogoTwitter size={25} className="fill-slate-200" />
          </div>
          <p className="text-slate-200 ">&copy; Copyright 2023 TC Portfolio</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
