import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const { modal } = useSelector((state) => state.modal);
  //console.log("modal", modal);
  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
      dispatch({ type: "MODAL", payload: false });
      toast.success("Post is updated");
    } else {
      dispatch(createPostAction(postData));
      dispatch({ type: "MODAL", payload: false });
      toast.success("New Post is added");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-opacity-50 bg-black fixed top-0 bottom-0 left-0 right-0 z-50">
      <div className="bg-white w-1/2 p-2 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-2xl text-indigo-800">
            {modal?.updateId ? "UPDATE POST" : "SHARE POST"}
          </h1>
          <IoMdCloseCircleOutline size={30} className="text-indigo-800" />
        </div>
        <div className=" my-4 flex flex-col space-y-3 ">
          <input
            value={postData.user}
            name="user"
            onChange={onChangeFunc}
            type="text"
            placeholder="User"
            className="input-style"
          />
          <input
            value={postData.title}
            name="title"
            onChange={onChangeFunc}
            type="text"
            placeholder="Title"
            className="input-style"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onChangeFunc}
            type="text"
            placeholder="Description"
            className="input-style"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          {modal?.updateId ? "UPDATE" : "Share"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
