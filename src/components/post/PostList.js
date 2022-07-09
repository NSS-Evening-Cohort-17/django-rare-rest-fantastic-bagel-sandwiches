import react, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { getPosts } from "./PostManager"
import "./../Rare.css"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    const loadPosts = () => {
        getPosts().then(data => setPosts(data))
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
            <h2>All posts</h2>
            {posts.map(post =>
                <PostCard
                key={post.id}
                post={post}
                />
            )}
        </article>
    )
}
