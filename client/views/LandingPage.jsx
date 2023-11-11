import logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div
        className="h-screen hero cvr-bg bg-cover"
        style={{
          backgroundImage:
            'url("https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-518ee16197-1.webp")',
        }}
      >
        <div className="flex justify-center items-center rounded-md h-32">
          {/* header */}
          <nav className="mt-10 w-2/3 rounded-md  bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="#" className="flex items-center">
                <img
                  src={logo}
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <Link to='/card'>Jobseeker</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Employer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* background */}
        <div className="wrapper flex justify-center flex-col items-center">
          <div className="pusher w-2/3">
            <div className="caption">
              <h2 className="mt-32 text-3xl font-bold mb-2">
                Your dream job is <br />
                just a click away
              </h2>
              <div className="txt">
                <p className="text-gray-600">
                  The simplest way to career opportunities starts here
                </p>
              </div>
            </div>
            <div className="search">
              <form className="clearfix" id="form-hero">
                <input
                  type="hidden"
                  name="url"
                  defaultValue="https://www.kalibrr.com/job-board/"
                />
                <input type="hidden" name="path" defaultValue="te" />
                <div className="emul mb-4">
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Search for a job title"
                    name="query"
                    required="required"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  <i className="cvr-bg"></i>
                  <span>Search</span>
                </button>
              </form>
              <div className="sugg">
                <span className="text-gray-600">Popular Searches:</span>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600"
                >
                  IT and Software
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Internship
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Digital Marketing
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Remote
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Accounting
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fnav">
          <span className="bg"></span>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="flex justify-center">
          <h2 className="mt-32 text-7xl font-bold">
            Find a career that works for you
          </h2>
        </div>
        <div>
          <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
            <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                  alt="Skyscrapers"
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Python Developer
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                <small>Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                  alt="Los Angeles Skyscrapers"
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Fullstack Developer
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                <small>Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                  alt="Palm Springs Road"
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Frondend 
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                <small>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen ">
      <div className="hire cvr-bg bg-cover mt-40" style={{
      backgroundImage: 'url("https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-60231057df.webp")'
    }}>
      <div className="wrapper text-center text-white p-8">
        <h2 className="text-2xl font-bold">Looking to hire?</h2>
        <div className="txt">
          <p>Hire better, faster, easier</p>
        </div>
        <a
          href="#"
          className="button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4 inline-block"
        >
          Request Demo Call
        </a>
      </div>  
    </div>

    <div className="wrapper rowflex p-32">
      <div className="caption">
        <h2>How can we help you?</h2>
        <div className="txt"><p>Check out what our job seekers have to say</p></div>
      </div>
      <div className="bubble">
        <div className="item clearfix">
          <div className="holder">
            <figure>
              <img
                src="https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-f418ea5054.webp"
                width="74"
                className="lazy"
                style={{}}
              />
            </figure>
            <div className="layer">
              <div className="cvr-bg-bf emul">
                <b className="text-purple-600">Danny A. <small>Manager</small></b>
                <div className="txt">
                  <p>
                    Apart from easily finding jobs, companies were also reaching out to me to apply for their roles! Getting noticed on Kalibrr made my job search fast and easy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item clearfix">
          <div className="holder">
            <figure>
              <img
                src="https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-a19175d69f.webp"
                width="74"
                className="lazy"
                style={{}}
              />
            </figure>
            <div className="layer">
              <div className="cvr-bg-bf emul">
                <b className="text-teal-400">Adrian G. <small>Intern</small></b>
                <div className="txt">
                  <p>
                    Finding remote work was so easy to do in Kalibrr! I could easily track all my ongoing applications, and I kept getting great job recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>

      <footer id="bottom" class="bg-gray-500 text-white py-8">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between p-20">
          <div class="mb-4 md:mb-0">
            <img
              src="https://b2c.kalibrr.com/wp-content/uploads/2022/05/logo-footer.svg"
              srcset="
                https://b2c.kalibrr.com/wp-content/uploads/2022/05/logo-footer-mobile.svg 500w,
                https://b2c.kalibrr.com/wp-content/uploads/2022/05/logo-footer.svg 800w
              "
              sizes="(min-width: 769px) 100vw, 30vw"
              width="150"
              alt="Kalibrr Logo"
            />
          </div>
          <div class="flex flex-wrap md:flex-nowrap -mx-2">
            <div class="mb-4 md:mb-0 md:px-2">
              <h3 class="text-lg font-semibold mb-2">Candidates</h3>
              <ul class="list-none p-0">
                <li class="mb-2">
                  <a href="#" class="text-white">Sign up</a>
                </li>
                <li>
                  <a href="#" class="text-white">Job Board</a>
                </li>
              </ul>
            </div>
            <div class="mb-4 md:mb-0 md:px-2">
              <h3 class="text-lg font-semibold mb-2">Employers</h3>
              <ul class="list-none p-0">
                <li class="mb-2">
                  <a href="#" class="text-white">Start Hiring</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white">Employer Branding</a>
                </li>
                <li>
                  <a href="#" class="text-white">Blog</a>
                </li>
              </ul>
            </div>
            <div class="mb-4 md:mb-0 md:px-2">
              <h3 class="text-lg font-semibold mb-2">About</h3>
              <ul class="list-none p-0">
                <li class="mb-2">
                  <a href="#" class="text-white">About</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white">Careers</a>
                </li>
                <li>
                  <a href="#" class="text-white">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between mt-6 p-20">
          <p class="text-sm">
            © 2023 Kalibrr Technology Ventures Inc.
          </p>
          <ul class="list-none p-0 flex mt-2 md:mt-0">
            <li class="md:ml-4">
              <a href="#" class="text-white text-sm">Privacy Policy</a>
            </li>
            <li class="md:ml-4">
              <a href="#" class="text-white text-sm">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    </>
  );
}
