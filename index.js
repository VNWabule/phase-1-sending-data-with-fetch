function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(Response => Response.json())
    .then(data => {
        document.body.innerHTML = data.id.toString()
        return data
    })
    .catch(error => {
        document.body.innerHTML = error.message
        return error.message
    })
}
