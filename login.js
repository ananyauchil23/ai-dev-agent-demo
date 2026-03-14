function login(username, password) {
    // Trim username and password
    username = username.trim();
    password = password.trim();

    if(username === "admin" && password === "admin123"){
        return "Login success";
    }

    return "Login failed";
}

module.exports = login;