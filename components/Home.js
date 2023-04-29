import Link from "next/link";
import Container from "./Container";
import {
  IoDownloadOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import Image from "next/image";

function Main() {
  return (
    <div
      id="home"
      className="h-auto md:h-screen bg-neutral-50 pt-24 md:pt-0 md:-mt-24 justify-center w-full"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-20">
          <div className="flex items-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                I'm Joel Jeffery.
              </p>
              <p className="text-3xl font-thin mt-4 text-slate-700">
                I'm a victoria based passionate{" "}
                <span className="font-bold">Front End Developer</span>. 📍
              </p>

              <div className="mt-5 flex space-x-4 items-center">
                <Link
                  href=""
                  className="border-2 border-slate-700 rounded-full px-4 py-2 flex items-center space-x-1"
                >
                  <span>Resume</span>
                  <IoDownloadOutline size={23} />
                </Link>
                <Link
                  href="#contact"
                  className="bg-slate-900 text-neutral-100 border-2 border-slate-900 rounded-full px-4 py-2 block"
                >
                  <span>Contact me</span>
                </Link>
              </div>
              <div className="flex items-center space-x-3 mt-5">
                <Link href="">
                  <IoLogoGithub
                    size={30}
                    className="fill-slate-500 hover:fill-slate-950 transition-all duration-300"
                  />
                </Link>
                <Link href="">
                  <IoLogoLinkedin
                    size={30}
                    className="fill-slate-500 hover:fill-blue-800 transition-all duration-300"
                  />
                </Link>
                <Link href="">
                  <IoLogoTwitter
                    size={30}
                    className="fill-slate-500 hover:fill-blue-500 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              alt="picture"
              src={"/coach1.webp"}
              height={700}
              width={700}
              className="h-[30rem] rounded-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
