function login(username, password) {

    if (!username || !password) {
        return "Username or password cannot be empty";
    }

    if(username === "admin" && password === "admin123"){
        return "Login success";
    }

    return "Invalid username or password";
}

module.exports = login;