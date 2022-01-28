import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PostBlogs = () => {
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://damp-stream-68541.herokuapp.com/blogs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setSuccess(true);
                }
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-9">
                <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                        type="file"
                        accept="image/"
                        required
                        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    />
                </label>
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Blog Title"
                    {...register("title")}
                />
                <textarea
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Blog Description"
                    {...register("description")}
                />
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Category"
                    {...register("category")}
                />
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Cost"
                    {...register("cost")}
                />
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Location"
                    {...register("location")}
                />
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Name"
                    {...register("name")}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <button
                    type="submit"
                    className="font-bold my-1 bg-pink-600 px-3 py-2 rounded text-white w-full"
                >
                    Post Your Blog
                </button>
            </form>
            {success && (
                <alert severity="success">Your Blog Added Successfully!</alert>
            )}
        </div>
    );
};

export default PostBlogs;
