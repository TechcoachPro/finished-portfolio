import {
  IoBulbOutline,
  IoBusinessOutline,
  IoCalendarNumberOutline,
  IoFlagOutline,
  IoLocateOutline,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoSchoolOutline,
} from "react-icons/io5";
import Container from "./Container";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:inline">
            <Image
              alt="picture"
              src={"/coach1.webp"}
              height={700}
              width={700}
              className="h-60 object-contain"
            />
          </div>
          <div className="col-span-2">
            <p className="font-bold text-2xl">About me</p>
            <p className="text-lg text-justify md:text-left text-neutral-600 max-w-xl mt-2">
              Use this bio section as your way of describing yourself and saying
              what you do, what technologies you like to use or feel most
              comfortable with, describing your personality, or whatever else
              you feel like throwing in.
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-5">
              <div>
                <div className="flex items-center space-x-2">
                  <IoLocateOutline />
                  <span className="font-bold">Location:</span>
                  <span className="text-slate-600">Victoria, BC</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoFlagOutline />
                  <span className="font-bold">Nationality:</span>
                  <span className="text-slate-600">Canadian / Irish</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoSchoolOutline />
                  <span className="font-bold">Study:</span>
                  <span className="text-slate-600">University of Victoria</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <IoCalendarNumberOutline />
                  <span className="font-bold">Age:</span>
                  <span className="text-slate-600">Victoria, BC</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoBulbOutline />
                  <span className="font-bold">Interests:</span>
                  <span className="text-slate-600">
                    Motorcycles, Muay Thai, Banjos
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoBusinessOutline />
                  <span className="font-bold">Employment:</span>
                  <span className="text-slate-600">Instant Domains, inc.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-20 justify-center">
          <div className="border-r-4 pr-6 border-slate-950">
            <p className="text-2xl font-bold">
              Tech <span className="text-slate-600">Stack</span>
            </p>
          </div>
          <div className="pl-6 flex items-center space-x-3 flex-wrap">
            <IoLogoHtml5 size={50} />
            <IoLogoCss3 size={50} />
            <IoLogoJavascript size={50} />
            <IoLogoReact size={50} />
            <IoLogoNodejs size={50} />
            <IoLogoFirebase size={50} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
