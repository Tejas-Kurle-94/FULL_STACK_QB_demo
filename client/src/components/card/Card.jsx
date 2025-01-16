/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
    const navigate = useNavigate();
    const getSinglePost = () => {
        navigate(`/getsinglepost/${post?._id}`);
    }

    return (
        <div>
            <div onClick={getSinglePost} className="mx-auto my-5 max-w-sm min-h-10 hover:cursor-pointer rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <h3 className="text-sm font-normal text-gray-700 pb-2 border-b-2">{post?.topic}</h3>
                <h2 className="mt-1 text-xl font-bold line-clamp-1 text-gray-800">{post?.question}</h2>
                <div className="mt-4 border-l-4 border-emerald-500 bg-gray-100 rounded-e-md p-4">
                    <p className="text-gray-700 line-clamp-1 min-h-[20px]">{post?.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
