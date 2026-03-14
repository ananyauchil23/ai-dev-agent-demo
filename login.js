function login(username, password) {

    if (!username || !password) {
        return "Username and password cannot be empty";
    }

    if(username === "admin" && password === "admin123"){
        return "Login success";
    }

    return "Login failed";
}

module.exports = login;