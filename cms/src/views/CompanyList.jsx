import CompanyListRow from '../components/CompanyListRow'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchCompany } from '../stores/actions/actionsCreator'

export default function CompanyList() {
  const [loading, setLoading] = useState(false)
  const {companies} = useSelector((state) => {
    return state.companyReducer
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      dispatch(fetchCompany()).finally(() => {
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

  if (!loading) {
      return <LoadingSpinner />
  }

    return (
      <>

        <section id="category-section" className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-auto p-6 shadow-lg bg-white rounded-md">
          
          <div className="flex justify-between py-6">
            <div className="font-semibold text-2xl">
              <h1>Company List</h1>
            </div>
            <div>
              <button onClick={() => navigate('/add-company')} id="add-new-category" className="border-2 border-gray-500 py-2 px-6 text-white  bg-gray-700 rounded-xl hover:bg-transparent hover:text-indigo-500">Add Company</button>
            </div>
          </div>
  
          <div>
            <div>
              <table className="table-auto">
                <thead className="bg-gray-96 border-b-2 border-gray-100">
                  <tr>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Company Logo</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Location</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Edit</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Delete</th>
                  </tr>
                </thead>
               
               {loading ? (
                companies.map((datas, index) => {
                  return <CompanyListRow key={index} datas={datas} index={index} />
                })) : (
                  <p> Loading .... </p>
                )
               }
               

              </table>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}