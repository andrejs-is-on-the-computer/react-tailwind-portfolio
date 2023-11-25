import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

export default function Home() {
  return (
    <div>

      <Head>

      </Head>

      <main className="bg-white px-10">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyChevvy</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="">Andrejs Bicevskis</h2>
            <h3>Developer and designer.</h3>
            <p>Cool developer guy who definitely will not take your rejection of my job application personally.</p>
          </div>
          <div>
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
        </section>
      </main>
    </div>
  )
}
