import {
  IoLocateOutline,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";
import Container from "./Container";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="py-20">
      <Container>
        <div className="flex items-center space-x-2 mb-8">
          <IoMailOutline size={40} />
          <p className="text-2xl font-bold">Get in touch</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form>
              <input
                type="text"
                className="block w-full rounded-md p-2 bg-neutral-200 mb-2"
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                className="block w-full rounded-md p-2 bg-neutral-200 mb-2"
                name="email"
                placeholder="Email"
              />
              <textarea
                rows={8}
                className="block w-full rounded-md p-2 bg-neutral-200 mb-2"
                placeholder="Message"
              ></textarea>
              <button className="bg-black text-white rounded-md mt-5 px-3 py-2">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <p>
              Here is a good spot for a message to your readers to let them know
              how best to reach out to you.
            </p>
            <ul className="mt-10">
              <li className="flex items-center space-x-2 mb-3">
                <IoMailOutline size={25} />{" "}
                <Link href={"mailto:jeffery@techcoach.pro"}>
                  jeffery@techcoach.pro
                </Link>
              </li>
              <li className="flex items-center space-x-2 mb-3">
                <IoLocateOutline size={25} />{" "}
                <Link href={""}>Victoria BC, Canada</Link>
              </li>
              <li className="flex items-center space-x-2 mb-3">
                <IoLogoTwitter size={25} />{" "}
                <Link href={"https://twitter.com/nftly_eth"}>nftly_eth</Link>
              </li>
              <li className="flex items-center space-x-2 mb-3">
                <IoLogoInstagram size={25} />{" "}
                <Link href={""}>techcoach.pro</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
