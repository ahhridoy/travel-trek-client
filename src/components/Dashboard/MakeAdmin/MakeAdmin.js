import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleOnSubmit = (e) => {
        const user = { email };
        fetch("https://damp-stream-68541.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            });

        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Write User's Email"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />{" "}
                <br />
                <button
                    type="submit"
                    className="font-bold my-1 bg-pink-600 px-3 py-2 rounded text-white w-full"
                >
                    Make An Admin
                </button>
            </form>
            {success && (
                <h1 className="text-green-600">Made Admin Successfully!</h1>
            )}
        </>
    );
};

export default MakeAdmin;
