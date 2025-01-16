import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreatePost = () => {
    const [topic, setTopic] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const navigate = useNavigate();
    const { postID } = useParams();
    const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    const getSinglePost = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/getsinglepost?postID=${postID}`);
            setTopic(response.data.responseData.topic);
            setQuestion(response.data.responseData.question);
            setAnswer(response.data.responseData.answer);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (postID) {
            getSinglePost();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (postID) {
            const updatedPost = await axios.put(`${BACKEND_URL}/updatepost`, { postID, topic, question, answer });
            if (updatedPost?.data?.responseData) { navigate(`/getsinglepost/${postID}`); }
        } else {
            // Handle form submission here
            const createPost = await axios.post(`${BACKEND_URL}/createpost`, { topic, question, answer });
            if (createPost?.data?.responseData) { navigate("/"); }
        }
    };

    return (
        <div className="min-h-screen mt-4 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 w-full md:w-[70%] mx-auto">
                <div className="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10">
                    <div className="w-full mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h2 className="text-2xl font-bold mb-6 text-center">{postID ? 'Update Post' : 'Create New Post'}</h2>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="title"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-emerald-600 placeholder-transparent pb-1"
                                            placeholder="Title"
                                            required
                                        />
                                        <label className="absolute  left-0 -top-3.5 text-gray-700 text-lg font-semibold transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-lg">
                                            Title
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="question"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                            className="peer w-full h-24 border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-emerald-600 rounded-lg p-2 mt-2"
                                            placeholder="Enter your question"
                                            required
                                        />
                                        <label className="absolute left-0 -top-6 text-gray-700 text-lg font-semibold">
                                            Question
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="answer"
                                            value={answer}
                                            onChange={(e) => setAnswer(e.target.value)}
                                            className="peer w-full h-24 border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-emerald-600 rounded-lg p-2 mt-2"
                                            placeholder="Enter your answer"
                                            required
                                        />
                                        <label className="absolute left-0 -top-6 text-gray-700 text-lg font-semibold">
                                            Answer
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <button
                                            type="submit"
                                            className="bg-emerald-600 text-white rounded-md px-6 py-2 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50 w-full">
                                            {postID ? 'Update' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;