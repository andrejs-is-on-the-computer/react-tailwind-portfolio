"use client";
import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from  '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>

      </Head>
      <nav className="p-5 mb-12 flex justify-between fixed top-0 w-full shadow-md z-50 bg-teal-500 dark:bg-teal-800">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-burtons text-teal-950 dark:text-teal-200">developedbyChevvy</h1>
        </div>
        
        <ul className="flex items-center">
          <li>
            <div className="mx-auto rounded-full w-10 h-10 overflow-hidden cursor-pointer flex items-center justify-center bg-teal-800 dark:bg-teal-500" onClick={() => setDarkMode(!darkMode)}>
              <BsFillMoonStarsFill className="text-2xl text-teal-500 dark:text-teal-800" />
            </div>
          </li>
          <li>
            <a className="px-4 py-2 rounded-md ml-8 text-teal-100 bg-teal-800 dark:text-teal-800 dark:bg-teal-500" href="#">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="">
          
          <div className="text-center p-10 py-20">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Andrejs Bicevskis
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-100">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-400">
              Cool developer guy who definitely will not take your rejection of 
              my job application personally.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a>
              <AiFillTwitterCircle />
            </a>
            <a>
              <AiFillLinkedin />
            </a>
            <a>
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-slate-100">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              I make the <span className="text-teal-500">website</span>. 
              I make it look <span className="text-teal-500">good</span>. 
              I make your <span className="text-teal-500">website</span> for you. 
              <span className="text-teal-500">Please</span>. Give me the job.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              Need money. Need Job. Need money. Need Job.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="mx-auto" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I make the <span className="text-teal-500">website</span>. 
              I make it look <span className="text-teal-500">good</span>. 
              I make your <span className="text-teal-500">website</span> for you. 
              <span className="text-teal-500">Please</span>. Give me the job.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Need money. Need Job. Need money. Need Job.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}
