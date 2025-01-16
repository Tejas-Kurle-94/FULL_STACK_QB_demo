import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SinglePost = () => {
    const { postID } = useParams();
    const [post, setPost] = useState();
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    const getSinglePost = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/getsinglepost?postID=${postID}`);
            setPost(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async () => {
        try {
            const postDeleted = await axios.delete(`${BACKEND_URL}/deletepost`, { data: { postID } });
            if (postDeleted.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSinglePost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="max-w-2xl  mt-20 mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-gray-500">
                <div className="p-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                        {post?.topic}
                    </h3>

                    <h2 className="text-xl font-bold text-emerald-800 mb-4">
                        {post?.question}
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        {post?.answer}
                    </p>
                </div>
                <div className="max-w-2xl mt-5 mx-auto p-4">
                    <div className="flex justify-end gap-2 mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => navigate(`/updatepost/${postID}`)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={deletePost}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;