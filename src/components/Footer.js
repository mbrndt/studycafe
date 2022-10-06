import React from "react";
import { HiSparkles } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex justify-between m-10">
      <div className="flex justify-start items-center">
        <h1>2022, copyright mareike brandt</h1>
        <a
          className="px-4 py-2 rounded-md ml-2"
          href="https://www.linkedin.com/in/mareike-brandt-4911b520b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiFillLinkedin className="h-8 w-8 cursor-pointer text-green-800" />
        </a>
        <a
          className="px-4 py-2 rounded-md"
          href="https://github.com/mbrndt"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiFillGithub className="h-8 w-8 cursor-pointer text-green-800" />
        </a>
        <a
          className="px-4 py-2 rounded-md"
          href="https://www.youtube.com/channel/UCmDYNxaQ9rbzdzlFSfvECog"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiFillYoutube className="h-8 w-8 cursor-pointer text-green-800" />
        </a>
      </div>
      <HiSparkles className="text-amber-400 text-5xl flex " />
    </div>
  );
}

export default Footer;
