import Link from "next/link";
import Container from "./Container";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";

function Portfolio() {
  const porfolio = [
    {
      id: 1,
      title: "Car Rentals",
      description:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      tags: ["React", "HTML", "CSS", "Tailwind"],
      repo: "https://github.com",
      demo: "",
      image: "/car.webp",
    },
    {
      id: 2,
      title: "Mini Ecommerce",
      description:
        "With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
      tags: ["React JS", "CSS3"],
      repo: "https://github.com",
      demo: "https://techcoach.pro",
      image: "/ecom.webp",
    },
    {
      id: 3,
      title: "Gymate",
      description:
        "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
      tags: ["Next JS", "Tailwind CSS"],
      repo: "https://github.com",
      demo: "https://techcoach.pro",
      image: "/gym.webp",
    },
  ];
  return (
    <div id="portfolio" className="py-32 bg-black/5">
      <Container>
        <div>
          <p className="text-2xl font-bold">Portfolio</p>
          <p className="text-slate-500">My latest unique projects.</p>
        </div>
        {porfolio.map((data) => (
          <div
            key={data.id}
            className="flex-col md:flex-row flex mt-10 mb-10 gap-10 md:odd:flex-row-reverse md:border-y border-slate-900"
          >
            <div className="max-w-sm md:py-10">
              <p className="text-xl font-bold">{data.title}</p>
              <p className="text-justify mt-2">{data.description}</p>
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap space-x-2 mt-4">
                  {data.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-neutral-300 rounded-full px-4 py-1 font-bold"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 flex items-center space-x-3">
                {data.repo && (
                  <Link
                    href={data.repo}
                    className="flex items-center space-x-1 py-2 px-4 border-slate-900 rounded-md border"
                  >
                    <IoLogoGithub />
                    <span>Repository</span>
                  </Link>
                )}

                {data.demo && (
                  <Link
                    href={data.demo}
                    className="flex items-center space-x-1 py-2 px-4 bg-slate-900 text-white border-slate-900 rounded-md border"
                  >
                    <IoLinkOutline />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex-1 max-h-[20rem] overflow-hidden group">
              <Image
                alt="picture"
                src={data.image}
                height={700}
                width={700}
                className="object-cover border shadow-lg transition-all duration-[5s] w-full h-full object-top group-hover:object-bottom"
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Portfolio;
