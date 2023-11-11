import {useState, useEffect} from "react"
import CardList from "../src/components/CardList"
import Header from "../src/components/Header"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchJob } from "../src/stores/actions/actionCreator"

export default function Card() {
  const [loading, setLoading] = useState(false)
  const {jobs} =useSelector((state) => {
      return state.jobReducer
  })

  const dispatch = useDispatch()

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
      

            <div className="grid border-tertiary-ghost-color text-sm p-4 md:p-6">
                {jobs.map((job, index) => {
                    return <CardList key={index} job={job} />
                })}  
            </div>

            </>       
      
    )
}