import TableJobRow from '../components/TableJobRow'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchJob } from '../stores/actions/actionsCreator'

export default function TableJob() {
    const [loading, setLoading] = useState(false)
    const {jobs} =useSelector((state) => {
        return state.jobReducer
    })
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            dispatch(fetchJob()).finally(() => {
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

        <section id="product-section" className="mt-10 flex justify-center items-center min-h-screen bg-white">
        <div className="w-auto p-6 shadow-lg bg-white rounded-md">
            
            <div className="flex justify-between py-6">
            <div className="font-semibold text-2xl">
                <h1>Jobs</h1>
            </div>
            <div>
                <button onClick={() => navigate('/add')} id="add-new-product" className="border-2 border-gray-500 py-2 px-6 text-white  bg-gray-700 rounded-xl hover:bg-transparent hover:text-indigo-500">Add Job</button>
            </div>
            </div>

            <div>
            <div>
                <table className="table-auto">
                <thead className="bg-gray-96 border-b-2 border-gray-100">
                    <tr>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left" width="350px">Description</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Company Logo</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Company</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Author</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Job Type</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Edit</th>
                    <th scope="col" className="p-3 text-sm font-semibold tracking-wide text-left">Delete</th>
                    </tr>
                </thead>

                {loading ? (
                    jobs.map((datas, index) => {
                        return <TableJobRow key={index} datas={datas} index={index} />
                    })  
                ): (
                    <p> Loading .... </p>
                )}
                    
                </table>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}