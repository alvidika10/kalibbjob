import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addCompany } from '../stores/actions/actionsCreator';

export default function AddCompany() {
    const [input, setInput] = useState({
        name: '',
        companyLogo: '',
        location: '',
        email: '',
        description: ''
      })
    
      const navigate = useNavigate();
      const dispatch = useDispatch()
    
      const handleChange = (event) => {
        const {value, name} = event.target
        setInput({
          ...input,
          [name]: value
        })
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCompany(input)).then(() => {
          navigate('/company-list')
        })
      }

    return (
        <section id="edit-product-section" className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md py-5">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Company</h2>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                
              <form onSubmit={handleSubmit} id="edit-product-form" className="mb-0 space-y-6" action="" method="POST">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input onChange={handleChange} value={input.name} id="name-edit-product" name="name" type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                  <div className="mt-1">
                    <input onChange={handleChange} value={input.companyLogo} id="description-edit-product" name="companyLogo" type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
        
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <div className="mt-1">
                    <input onChange={handleChange} value={input.location} id="price-edit-product" name="location" type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input onChange={handleChange} value={input.email} id="stock-edit-product" name="email" type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <div className="mt-1">
                    <input onChange={handleChange} value={input.description} id="stock-edit-product" name="description" type="text" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Company</button>
                  </div>
                  <div>
                    <button onClick={() => navigate('/company-list')} type="" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>      
      </section>
    )
}