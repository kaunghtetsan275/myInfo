import React from "react";
import Link from "next/link";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home({ setting }) {
  return (
    <div className="flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse">
      <MetaSeo
        title="Cattt family"
        description="This is Cattt family. We are Kevin, Tora and Thor."
      />
      <div className="xl:w-7/12" data-aos="fade-up">
        <h1 className="font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left">
          <Typewriter
            options={{
              // strings: setting.title.split("|"),
              strings: "Hi, I'm Kevin Cattt".split("|"),
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="mt-5 mb-4 text-center xl:text-left leading-7">
          {/* {setting.subtitle} */}
          I'm a Fullstack Developer and AI engineer. Currently pursuing Master's degree and working as a teaching assistant at SIIT, Thammasat University.
        </p>
        <p className="text-center z-50 xl:text-left">
          View
          <Link href={"/portfolio"}>
            <a>
              <span className="font-semibold underline"> my portfolio</span>
            </a>
          </Link>{" "}
          and also{" "}
          <a href="https://www.linkedin.com/in/kaunghtetsan" target={"_blank"} rel="noreferrer">
            <span className="font-semibold underline">my CV</span>
          </a>
        </p>
      </div>
      <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
        <Image
          // src={constant.storage + `${setting.img?.path}`}
          src = "/img/kevin.jpg"
          layout="fixed"
          height={300}
          width={500}
          alt="BG-Image"
          className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await http.get("/item/home");
  return {
    props: {
      setting: req.data,
    },
  };
}
