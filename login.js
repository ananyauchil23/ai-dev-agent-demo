function login(username, password) {

    // BUG: allows empty username and password

    if(username === "admin" && password === "admin123"){
        return "Login success";
    }

    return "Login failed";
}

module.exports = login;