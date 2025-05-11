'use client'

import axios from "axios";

export default function Update({ result }) {
  const id = result._id;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const time = new Date();
    const dateOnly = time.toISOString().split('T')[0];
    const user = form.user.value;
    const details = form.details.value;

    const data = { title, description, category, photo, dateOnly, user, details };
  
  
    await axios
    .put(`http://localhost:3000/api/products/${id}`, data)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e.message));
  };
  
  return (
    <div>
       <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Add Product</h2>
      <form className="space-y-8" onSubmit={handleUpdate}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="add product title"
                className="input input-bordered w-full"
                defaultValue={result.title}

              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
                defaultValue={result.description}
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="">
         

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
                defaultValue={result.category}
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user"
                placeholder="user name"
                className="input input-bordered w-full"
                defaultValue={result.user}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="email"
                className="input input-bordered w-full"
                defaultValue={result.details}
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Send Img URL (ONLY img bb) URL"
                className="input input-bordered w-full"
                defaultValue={result.photo}
              />
            </label>
          </div>
        </div>

        <button  type="submit" placeholder="Update product" className="btn btn-block bg-[#D2B48C] ">
          Update product
        </button>
      </form>
    </div>
    </div>
  )
}
