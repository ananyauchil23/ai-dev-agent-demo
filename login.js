const validate = require('./validator');

function login(username, password) {
    if (!validate(username, password)) {
        return "Invalid credentials";
    }
    
    if(username === "admin" && password === "admin123"){
        return "Login success";
    }

    return "Login failed";
}

module.exports = login;