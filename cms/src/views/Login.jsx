import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../stores/actions/actionsCreator";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleLogin(input)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <section
        id="signin-section"
        className="flex justify-center items-center h-screen bg-white"
      >
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa fa-user" aria-hidden="true"></i> <span> </span>Sign
            In
          </h1>
          <hr className="mt-3" />
          <form onSubmit={handleSubmit} id="signin-form" action="">
            <div className="mt-3">
              <label className="block text-base mb-2">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                id="signin-email"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                placeholder="Enter Email..."
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-2">Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="signin-password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                placeholder="Enter Password..."
              />
            </div>
            <div className="mt-3 py-2">
              <button
                type="submit"
                className="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
