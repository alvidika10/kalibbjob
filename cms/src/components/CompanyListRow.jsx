import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteCompany } from '../stores/actions/actionsCreator';

export default function CompanyListRow({datas, index}) {

  const dispatch = useDispatch()

  const handleDelete = (event) => {
    event.preventDefault()
    dispatch(deleteCompany(datas.id))
  }

    return (
        <>
         <tbody id="table-category" className="border-b-2 border-gray-100">
                  <tr className="border-b-2 border-gray-100">
                    <td scope="row" className="p-3 text-sm text-gray-700">{index + 1}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.name}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700"><img src={datas.companyLogo} alt={datas.name} width={100} /></td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.location}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.email}</td>
                    <td scope="row" className="p-3 text-sm text-gray-700">{datas.description}</td>
                    <td id="edit-tool-logo" scope="row" className="p-3 text-sm text-gray-700"><button className="btn btn-success">
                      <Link to={`/edit-company/${datas.id}`}>Edit</Link> 
                      </button></td>
                    <td id="edit-tool-logo" scope="row" className="p-3 text-sm text-gray-700"><button onClick={handleDelete} className="btn btn-success">Delete</button></td>
                  </tr>
 
                </tbody>
        
        </>
    )
}