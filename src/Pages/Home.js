import React from "react";
import { HiSparkles } from "react-icons/hi";
import "../styles/index.css";
import { RiAddFill } from "react-icons/ri";

function Home() {
  return (
    <main id="home" className=" px-10:px-20 lg:px-40">
      <section className="min-h-screen mt-5">
        <h1 className="text-xl">Welcome Mareike!</h1>
        <p className="text-xl mt-3"> What do you want to study today?</p>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-nowrap">
          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-neutral-100">
            <h3 className="text-lg  font-medium pt-8 pb-2 dark:text-neutral-800">
              IT
            </h3>
          </div>
          <div className="basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-neutral-100">
            <h3 className="text-lg font-medium pt-8 pb-2">Korean</h3>
          </div>
          <div className="basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-neutral-100 to-transparent">
            <h1 className="leading-none text-amber-400 flex pt-8 pb-2 justify-center">
              <RiAddFill className="mx-1" />
              <p className="font-medium text-sm pb-2">Add more</p>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
