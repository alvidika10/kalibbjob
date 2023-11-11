import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDetailJob } from '../src/stores/actions/actionCreator'


export default function CardDetail() {
  const [loading, setLoading] = useState(false)
  const {jobDetail} = useSelector((state) => {
    return state.jobReducer
  })

  const dispatch = useDispatch()

  const {id} = useParams()
  console.log(id)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      dispatch(fetchDetailJob(id)).finally(() => {
        setLoading(true)
      })
    }, 2000)
  }, [])

  function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }


  console.log(jobDetail, "<<<<<")

  if (!loading) {
    return <LoadingSpinner />

  }

  let gaya = {
    display: "inline",
  };

  return (
    <>
      <div className="bg-white relative p-4 md:rounded-b-lg">
        <div className="w-100 p-6 shadow-lg bg-white rounded-md">
        <div class="w-full border-b hidden max-h-32 md:max-h-64 md:overflow-hidden lg:block css-15kz1p5">
          <img width="900" height="300" src="https://storage.googleapis.com/recruiter-processed-image-uploads.kalibrr.com/job-banner-url/production/c100ef2c-ab26-4b29-b7cc-74020d954e14.avif" alt="PT. Prima Vista Solusi" class="w-full" decoding="async" />
        </div>
          <div className="md:flex md:justify-between">
            <div className="mb-4">
              <a
                href="#"
                className="mt-72 ml-5 bg-white flex items-center flex-shrink justify-center text-4xl text-subdued overflow-hidden px-4 py-2 z-20 -top-8 w-32 h-20 shadow border border-tertiary-ghost-color rounded mb-4 md:w-48 md:h-28 md:-top-12 lg:absolute"
              >
                <div className="">
                  <img
                    loading="lazy"
                    src={jobDetail.Company.companyLogo}
                    alt="PT. Prima Vista Solusi"
                    width="130"
                    height="80"
                    className="block max-w-full max-h-full bg-white mx-auto"
                    decoding="async"
                  />
                </div>
              </a>
              <h1
                itemProp="title"
                className="text-title inline-flex items-center md:text-primary-head md:flex lg:mt-16"
              >
                {jobDetail.title}
              </h1>
              <span className="flex items-center">
                <a href="#">
                  <h2 className="inline-block">{jobDetail.Company.name}</h2>
                </a>
                <span className="mb-0.5">
                  &nbsp;
                  <div
                    className=""
                    data-tooltipped=""
                    aria-describedby="tippy-tooltip-17"
                    data-original-title="verified-business"
                    style={gaya}
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
              <ul className="md:flex">
                <li>
                  <span itemScope="" itemType="http://schema.org/PostalAddress">
                    {jobDetail.Company.location}
                  </span>
                  <div
                    className="hidden"
                    itemScope=""
                    itemType="http://schema.org/Place"
                    itemProp="jobLocation"
                  >
                    <div
                      itemScope=""
                      itemType="http://schema.org/PostalAddress"
                      itemProp="address"
                    >
                      <div itemProp="streetAddress">
                        16th, Jakarta Selatan, DKI Jakarta, Jalan Jenderal
                        Sudirman, Karet Kel., Setiabudi, Indonesia
                      </div>
                      <div itemProp="addressLocality">Jakarta Selatan</div>
                      <div itemProp="addressRegion">DKI Jakarta</div>
                      <div itemProp="addressCountry">Indonesia</div>
                      <div itemProp="postalCode"></div>
                    </div>
                  </div>
                  <div
                    className="hidden"
                    itemScope=""
                    itemType="http://schema.org/Country"
                    itemProp="applicantLocationRequirements"
                  >
                    <div itemProp="name">Indonesia</div>
                  </div>
                </li>
                <li className="md:list-disc md:ml-7">
                  <a
                    className="text-grey-900"
                  >
                    {jobDetail.jobType == '1' ? 'full time': 'part time'}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-subdued text-caption md:text-right">
              <p>
                Lowongan dipasang 7 days ago dan batas waktu lamaran adalah 26
                Oct
              </p>
              <p>Rekruter terakhir aktif 6 hours ago</p>
              <p>Di posting oleh: {jobDetail.User.username}</p>
              <span itemProp="datePosted" className="hidden">
                2023-09-26T02:09:37.291040+00:00
              </span>
              <span itemProp="validThrough" className="hidden">
                2023-10-25T17:00:00+00:00
              </span>
            </div>
          </div>
          <div className="mt-4 mb-8 md:flex md:justify-between">
            <div className="hidden md:inline">
              <button className="btn-primary btn-lg">Lamar Sekarang</button>
            </div>
            <div className="flex justify-between md:items-end">
              <button className="btn-tertiary inline-flex items-center justify-center w-full md:btn-lg md:w-auto">
                <svg
                  className="MuiSvgIcon-root mr-2"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                </svg>
                Simpan
              </button>
              <button className="btn-tertiary inline-flex items-center justify-center w-full md:btn-lg md:w-auto">
                <svg
                  className="MuiSvgIcon-root mr-2"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31-2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                </svg>
                Bagikan
              </button>
            </div>
          </div>
          <div className="py-8 border-t border-tertiary-color md:flex md:justify-center">
            <div className="md:w-full md:pr-4 css-11e7ttb">
              <h2 className="text-title font-medium mb-2">
                Deskripsi Pekerjaan
              </h2>
              <div itemProp="description" className="mb-4 css-q0v7oq">
                <ul>
                  <li>{jobDetail.description}</li>
                </ul>
              </div>
              <h2 className="text-title font-medium mb-2">
                Kualifikasi Minimum
              </h2>
              <div itemProp="description" className="mb-4 css-q0v7oq">
                <ul>
                  <li>Sarjana</li>
                  <li>SMA</li>
                </ul>
              </div>
              <h2 className="text-title font-medium mb-2">
                Fasilitas dan Tunjangan
              </h2>
              <div itemProp="description" className="mb-4 css-q0v7oq">
                <ul>
                  <li>Gaji</li>
                  <li>Tunjangan</li>
                </ul>
              </div>
              <h2 className="text-title font-medium mb-2">
                Ringkasan Pekerjaan
              </h2>
              <div className="md:flex">
                <div className="md:mr-4">
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">
                      Tingkat Posisi
                    </dt>
                    <dd className="k-inline-flex k-items-center">
                      <a href="#">
                        {jobDetail.Skills[0].level}
                      </a>
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">
                      Spesialisasi
                    </dt>
                    <dd className="k-inline-flex k-items-center">
                      <a href="#">
                        {jobDetail.Skills[0].name}
                      </a>
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">
                      Persyaratan tingkat pendidikan
                    </dt>
                    <dd className="k-inline-flex k-items-center">
                      <a href="#">
                        Lulus program Sarjana (S1)
                      </a>
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">
                      Respon rekruter ke lamaran
                    </dt>
                    <dd className="k-inline-flex k-items-center">
                      <span className="k-mr-1">Often</span>
                      <div
                        className=""
                        data-tooltipped=""
                        aria-describedby="tippy-tooltip-17"
                        data-original-title="job-post.response-rate"
                        style={{ display: "inline" }}
                      >
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width={30}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                        </svg>
                      </div>
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">
                      Alamat Kantor
                    </dt>
                    <dd className="k-inline-flex k-items-center">
                      {jobDetail.Company.location}
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">Industri</dt>
                    <dd className="k-inline-flex k-items-center">
                      <span itemprop="industry">
                        Information Technology / IT
                      </span>
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">Lowongan</dt>
                    <dd className="k-inline-flex k-items-center">
                      1 lowongan dibuka
                    </dd>
                  </dl>
                  <dl className="k-mb-4">
                    <dt className="k-text-overline k-text-subdued">Situs</dt>
                    <dd className="k-inline-flex k-items-center">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {jobDetail.Company.email}
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 border-t border-tertiary-color md:flex md:justify-center">
            <div className="md:w-full md:pr-4 css-11e7ttb">
              <h2 className="text-title font-medium mb-2">
                Tentang {jobDetail.Company.name}
              </h2>
              <div itemProp="description" className="mb-4 css-q0v7oq">
                <p>
                  {jobDetail.Company.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
