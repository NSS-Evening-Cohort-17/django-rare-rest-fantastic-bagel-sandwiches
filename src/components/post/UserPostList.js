import react, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { UserPostCard } from "./UserPostCard";
import { getPostsByUser } from "./PostManager";
import "./../Rare.css"


export const UserPostList = () => {
    const [posts, setPosts] = useState([])

    const loadPosts = () => {
        getPostsByUser().then(data => setPosts(data))
    }

    useEffect(() => {
        loadPosts()
    }, [])

    useEffect(()  => {
        console.log(posts)
    }, [posts])



    // sorts all posts with most recent at top of page
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        const tempPosts = posts.sort((a,b) => (a.publication_date < b.publication_date) ? 1 : -1)
        setSortedPosts(tempPosts)
    }, [posts])



    return (
        <article className="postlist">
            <h2>My posts</h2>
            {posts.map(post =>
                <UserPostCard
                key={post.id}
                post={post}
                />
            )}
        </article>
    )
}




