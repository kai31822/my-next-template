/*import React from 'react';

const fetchPost = async (postId: string) => {
    const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: 'GET',
    });
    return post.json();
};
//Matadata
export async function generateMetadata({ params }: any) {
    const { post } = await fetchPost(params.id);

 return {
        metadataBase: new URL('http://localhost:3000'),
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/posts/${params.id}`,
            siteName: 'post',
            images: [
                {
                    url: post.img_url,
                    width: 1200,
                    height: 800,
                },
            ],
            type: 'website',
        },
    };
}*/

const PostID = ({ params, searchParams }: any) => {
    return (
        <div>
            <h1>Post: {params.id}</h1>
            <h1>searchParams: {searchParams.new}</h1>
        </div>
    );
};

export default PostID;
