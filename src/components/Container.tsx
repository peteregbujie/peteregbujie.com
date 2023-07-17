import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

type Props = {};

const Container = (props: Props) => {
 return (
  <section className="text-white body-font">
   <div className="container flex flex-col items-center p-5 mx-auto lg:py-10 md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
     <p className="text-xl font-bold sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl">
      Hello
     </p>
     <h1 className="pt-2 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl lg:pt-6">
      I&apos;m Peter
      <p className="py-4 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
       Fullstack Web Developer{" "}
      </p>
     </h1>
     <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6">
      I craft digital experiences through innovative code. I am a passionate web
      developer dedicated to turning ideas into captivating online realities.
     </p>
     <div className="flex items-center mt-6 md:mt-14">
      <ul className="flex items-center my-4 mr-6 space-x-2 sm:space-x-5 ">
       <Link
        href="https://twitter.com/peteregbujie"
        target="_blank"
        className="transition duration-150 ease-in opacity-75 hover:opacity-100"
       >
        <AiOutlineTwitter size={24} />
       </Link>

       <Link
        href="https://www.linkedin.com/in/peter-egbujie/"
        target="_blank"
        className="transition duration-150 ease-in opacity-75 hover:opacity-100"
       >
        <FaLinkedin size={24} />
       </Link>

       <Link
        href="https://github.com/peteregbujie"
        target="_blank"
        className="transition duration-150 ease-in opacity-75 hover:opacity-100"
       >
        <AiOutlineGithub size={24} />
       </Link>
      </ul>
      <Link
       href="mailto:ogbillion@gmail.com"
       target="_blank"
       className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
      >
       Email me
      </Link>
     </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
     <Image
      className="object-cover object-center rounded"
      width={400}
      height={400}
      src="/picture1.jpg"
      alt=""
     />
    </div>
   </div>
  </section>
 );
};

export default Container;
