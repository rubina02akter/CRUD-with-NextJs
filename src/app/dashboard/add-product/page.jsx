'use client'

import axios from "axios";

export default function addProduct() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const time = form.time.value;
    const user = form.user.value;
    const details = form.details.value;
  
    const data = { title, description, category, photo, time, user, details };
    console.log(data);
  
    axios
      .post("http://localhost:3000/api/products", data)
      .then((res) => console.log(res.data))
      .catch((e) => console.error("error:", e.message));
  };
  
  return (
    <div>
       <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Add Product</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
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
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">CreatedAt</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="time"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Info </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user"
                placeholder="user name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Info </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
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
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Add product" className="btn btn-block bg-[#D2B48C] "/>
      </form>
    </div>
    </div>
  )
}
