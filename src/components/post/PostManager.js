const remoteURL = "http://localhost:8000"

export const getPosts = () => {
    return fetch(`${remoteURL}/posts`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}