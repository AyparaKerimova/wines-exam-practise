import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants/api";
import { useFormik } from 'formik';
import { wineSchema } from "../validations/wineSchema";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddWine = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      oldPrice: 0,
      newPrice: 0,
      imageUrl:""
    },
    async onSubmit (values,actions) {
      await axios.post(BASE_URL,values);
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });
      actions.resetForm()
    },
    validationSchema:wineSchema
  });
  return (
    <>
     <Helmet>
        <title>Add Wine</title>
      </Helmet>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                 Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={formik.handleChange}
         value={formik.values.name}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p className="text-red-500">{formik.errors.name}</p>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Old Price
              </label>
              <input
                type="number"
                name="oldPrice"
                id="oldPrice"
                placeholder="Old Price"
                onChange={formik.handleChange}
         value={formik.values.oldPrice}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p className="text-red-500">{formik.errors.oldPrice}</p>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                New Price
              </label>
              <input
                type="number"
                name="newPrice"
                id="newPrice"
                placeholder="New Price"
                onChange={formik.handleChange}
         value={formik.values.newPrice}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p className="text-red-500">{formik.errors.newPrice}</p>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="URL"
                onChange={formik.handleChange}
         value={formik.values.imageUrl}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p className="text-red-500">{formik.errors.imageUrl}</p>
            </div>
            <div>
              <button style={{backgroundColor:"purple"}} type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add Wine
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWine;
