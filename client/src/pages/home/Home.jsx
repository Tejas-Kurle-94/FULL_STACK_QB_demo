import { useEffect, useState } from 'react';
import Card from "../../components/card/Card";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState();
    const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    const getPosts = async () => {
        const response = await axios.get(`${BACKEND_URL}/getallposts`);
        setPosts(response.data.responseData);
        // console.log(response.data.responseData);
    }

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Welcome Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                {posts?.map((post) => {
                    return <Card key={post?._id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default Home;