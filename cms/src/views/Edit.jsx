import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEditData,
  postEditData,
  fetchCompany,
} from "../stores/actions/actionsCreator";

export default function Edit() {
  const { companies } = useSelector((state) => {
    return state.companyReducer;
  });

  const [input, setInput] = useState({
    title: "",
    description: "",
    companyId: "",
    jobType: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEditData(id)).then((val) => {
      setInput(val);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchCompany());
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(postEditData(input, id)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <section
        id="edit-product-section"
        className="flex justify-center items-center h-screen bg-white"
      >
        <div className="w-96 p-6 shadow-lg bg-white rounded-md py-5">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Job
            </h2>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form
                onSubmit={handleEdit}
                id="edit-product-form"
                className="mb-0 space-y-6"
                action=""
                method="POST"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleChange}
                      value={input.title}
                      id="name-edit-product"
                      name="title"
                      type="text"
                      className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleChange}
                      value={input.description}
                      id="description-edit-product"
                      name="description"
                      type="text"
                      className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <select
                    onChange={handleChange}
                    value={input.companyId}
                    name="companyId"
                    id="categoryId-edit-product"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  >
                    <option value="" selected disabled>
                      ---Select Category--
                    </option>
                    {companies.map((companies) => {
                      return (
                        <option key={companies.id} value={companies.id}>
                          {companies.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Type
                  </label>
                  <select
                    onChange={handleChange}
                    value={input.jobType}
                    name="jobType"
                    id="categoryId-edit-product"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  >
                    <option value="" selected disabled>
                      ---Select Category--
                    </option>
                    <option value="full time">full time</option>
                    <option value="part time">part time</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Edit Job
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/")}
                      type=""
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
