import {Link } from 'react-router-dom'

export default function CardList({job}) {

    console.log(job, "<< Card List")
    return (
        <div className="w-100 p-6 shadow-lg bg-white rounded-md border-solid border-2 border-gray-300 mb-1" >
        <a
          
          className="bg-white flex items-center flex-shrink justify-center text-4xl text-subdued overflow-hidden px-4 py-2 row-span-4"
        >
          <div>
            <img
              src={job.Company.companyLogo}
              alt="PT. Prima Vista Solusi"
              width="130"
              height="80"
              className="block max-w-full max-h-full bg-white mx-auto"
              decoding="async"
            />
          </div>
        </a>
        <div className="col-start-3 row-start-1">
            <Link to={'/card-detail/' + job.id}
              className="text-primary-color"
            > 
            <h2 className="text-xl font-medium"> {job.title} </h2>
            </Link>
        </div>
        <div className="text-xs text-subdued col-start-1 row-start-5 col-span-3 mt-7 h-8 text-ellipsis overflow-hidden whitespace-normal">
          <div className="">{job.description}</div>
        </div>
        <div className="col-start-3 row-start-3 flex flex-col justify-end">
          <span className="inline-flex items-center mb-1">
            <a href="#" className="text-subdued">
              {job.Company.name}
            </a>
            <span className="ml-1 mb-0.5">
              <div
                className="inline"
                data-tooltipped=""
                aria-describedby="tippy-tooltip-1"
                data-original-title="verified-business"
              >
                <svg
                  className="MuiSvgIcon-root text-primary-color-500 MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                </svg>
              </div>
            </span>
          </span>
          <div className="flex flex-col md:flex-row">
            <a href="#" className="text-subdued block">
              {job.Company.location}
            </a>
          </div>
        </div>
        <div className="col-start-5 row-start-1 text-right text-xs text-subdued hidden mb-2 md:block">
          <span className="block mb-1">Posted 6 days ago • Apply before 26 Oct</span>
          <span className="block">Rekruter terakhir aktif 8 hours ago</span>
          <span className="block">Di posting: {job.User.username}</span>

        </div>
        <div className="col-start-5 row-start-1 md:flex md:justify-end md:items-end md:row-start-3">
          <div className="grid grid-rows-3">
            <button className="btn-tertiary inline-flex items-center justify-center row-start-1 row-span-2 md:row-start-2">
              <svg className="MuiSvgIcon-root md:mr-2" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.10-.1-.10C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
              </svg>
              <span className="hidden md:flex md:justify-end">Simpan</span>
            </button>
          </div>
        </div>
      </div>
    )
}