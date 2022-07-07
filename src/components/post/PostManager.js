const remoteURL = "http://localhost:8000"

export const getPosts = () => {
    return fetch(`${remoteURL}/posts`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getCategories = () => {
    return fetch(`${remoteURL}/categories`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    return fetch(`${remoteURL}/posts`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
}