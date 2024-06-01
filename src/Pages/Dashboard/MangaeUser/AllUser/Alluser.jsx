import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosSecure } from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const Alluser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} as an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Great!",
            text: `${user.name} is admin now!`,
            icon: "success",
          });
        });
      }
    });
  };
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${user.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`users/${user._id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Great!",
            text: `${user.name} is Deleted`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div>
      <div className="">
        <SectionTitle
          heading={"Manage users"}
          subHeading={"Your Users"}
        ></SectionTitle>
      </div>
      <div className="w-[90%] mx-auto p-10 shadow-xl">
        <h2 className="text-3xl font-bold my-5">
          Total Users : {users.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <span>SL</span>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={index}>
                  <th>
                    <span>{index + 1}</span>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{user?.email}</span>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <span onClick={() => handleMakeAdmin(user)} className="">
                        <FaUsers className="text-4xl cursor-pointer bg-[#d1a054] text-white p-2 rounded-md"></FaUsers>
                      </span>
                    )}
                  </td>
                  <th>
                    <span className="">
                      <RiDeleteBin6Fill
                        onClick={() => handleDelete(user)}
                        className="text-4xl cursor-pointer bg-red-500 text-white p-2 rounded-md"
                      />
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
