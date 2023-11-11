import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteJob } from '../stores/actions/actionsCreator';


export default function TableJobRow ({datas, index}) {

    const dispatch = useDispatch()

    // function delete data
    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(deleteJob(datas.id))
    }

    return (
        <>
        <tbody id="table-product" className="border-b-2 border-gray-100">
                    <tr className="border-b-2 border-gray-100">
                    <td scope="row" className="p-3 text-sm text-gray-700">{index + 1}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.title}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.description}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700"><img src={datas.Company.companyLogo} alt={datas.Company.name} width={100}/></td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.Company.name}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.User.username}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.jobType == 1 || datas.jobType === 'full time' ? 'full time' : 'part time'}</td>
                    <td id="edit-tool-logo" scope="row" className="p-3 text-sm text-gray-700">
                        <Link to={`/edit/${datas.id}`}> Edit </Link>
                    </td>
                    <td onClick={handleDelete} id="edit-tool-logo" scope="row" className="p-3 text-sm text-gray-700"><button className="btn btn-success">Delete</button></td>
                    </tr>
  
                </tbody>
        </>
    )
}