const remoteURL = "http://localhost:8000"

export const getCategories = () => {
    return fetch(`${remoteURL}/categories`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createCategory = (category) => {
    return fetch(`${remoteURL}/categories`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then(response => response.json())
}