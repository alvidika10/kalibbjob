import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob, fetchCompany } from "../stores/actions/actionsCreator";

export default function Add() {
  const { companies } = useSelector((state) => {
    return state.companyReducer;
  });
  const [input, setInput] = useState({
    title: "",
    description: "",
    companyId: "",
    jobType: "",
    skill1: "",
    skill2: "",
    skill3: "",
    level1: "",
    level2: "",
    level3: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchCompany());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let skills = []

    if (input.skill1 && input.level1) {
      skills.push({name: input.skill1, level: input.level1})
    }

    if (input.skill2 && input.level2) {
      skills.push({name: input.skill2, level: input.level2})
    }

    if (input.skill3 && input.level3) {
      skills.push({name: input.skill3, level: input.level3})
    }

    let payload = {
      ...input,
      skills
    }
    dispatch(addJob(payload)).then(() => {
      navigate("/");
    });
  };

  return (
    <section
      id="edit-product-section"
      className="flex justify-center items-center min-h-screen bg-white"
    >
      <div className="mt-2 w-2/6 p-6 shadow-lg bg-white rounded-md py-5 relative h-auto ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Add Job
          </h2>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              onSubmit={handleSubmit}
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
                  <option value="" selected>
                    ---Select Job Type--
                  </option>
                  <option value="full time">full time</option>
                  <option value="part time">part time</option>
                </select>
              </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Skill 1
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.skill1}
                    id="stock-edit-product"
                    name="skill1"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Level 1
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.level1}
                    id="stock-edit-product"
                    name="level1"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Skill 2
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.skill2}
                    id="stock-edit-product"
                    name="skill2"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Level 2
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.level2}
                    id="stock-edit-product"
                    name="level2"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Skill 3
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.skill3}
                    id="stock-edit-product"
                    name="skill3"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Level 3
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={input.level3}
                    id="stock-edit-product"
                    name="level3"
                    type="text"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>
            </div>
             

              <div className="flex justify-between">
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Job
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
  );
}
