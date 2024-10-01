import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deletePostAction(id));
    toast.warn("Post is deleted");
  };
  const updatePost = (id) => {
    dispatch({ type: "MODAL", payload: { open: true, updateId: id } });
    dispatch(updatePostAction(id));
  };
  return (
    <div className="relative w-1/3 border p-3 rounded-md bg-gray-50">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-md">{post?.description}</div>
      <div className="flex items-center justify-between mt-5">
        <span className="text-sm text-gray-500">{post?.user}</span>
        <span className="text-sm text-gray-500">
          {post?.date?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute top-1 right-1 flex gap-2 items-center">
        <RiDeleteBinLine
          onClick={() => deletePost(post._id)}
          size={22}
          className="bg-red-500 rounded-full text-white cursor-pointer p-1 hover:bg-red-700"
        />
        <CiEdit
          onClick={() => updatePost(post._id)}
          size={25}
          className="bg-green-500 rounded-full text-white cursor-pointer p-1 hover:bg-green-700"
        />
      </div>
    </div>
  );
};

export default HomeCard;
