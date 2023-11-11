import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewAdmin } from "../stores/actions/actionsCreator";


export default function Register() {

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
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
    dispatch(postNewAdmin(input)).then(() => {
      navigate('/')
    })
  }

    return (
        <>

        <section id="signup-section" className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-white-50 flex flex-col justify-center py-12 px-6 lg:px-8">
        
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
             
        
              <form onSubmit={handleSubmit}  id="signup-form" className="mb-0 space-y-6 mt-3" method="POST">
        
                <div>
                  <label  className="block text-sm font-medium text-gray-700">Username</label>
                  <div className="mt-1">
                    <input id="firstName-signup" onChange={handleChange} value={input.username} name="username" type="text"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label  className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input id="email-signup" onChange={handleChange} value={input.email} name="email" type="email"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label  className="block text-sm font-medium text-gray-700">password</label>
                  <div className="mt-1">
                    <input  id="password-signup" onChange={handleChange} value={input.password} name="password" type="password"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
          

                <div>
                  <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1">
                    <input  id="phoneNumber-signup" onChange={handleChange} value={input.phoneNumber} name="phoneNumber" type="text"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
  
                <div>
                  <label  className="block text-sm font-medium text-gray-700">Address</label>
                  <div className="mt-1">
                    <input  id="address-signup" onChange={handleChange} value={input.address} name="address" type="text"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                  </div>
                </div>
          
                <div className="flex items-center">
                  <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
                  <label  className="ml-2 block text-sm text-gray-900"
                    >I agree to the
                    <a href="#" className="text-gray-600 hover:text-gray-500">Terms</a>
                    and
                    <a href="#" className="text-gray-600 hover:text-gray-500">Privacy Policy</a>.
                  </label>
                </div>
        
                <div className="mt-3 py-2">
                  <button type="submit" className="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
        
        </>
    )
}