const JwtAuth = user => {
    const currentUser = {
        email: user.email,
    }

    fetch(`https://foods-seven.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('foods-token', data.token)
        })
}

export default JwtAuth;