function validate(username, password){
    if (!username || username.trim() === '') {
        return false;
    }
    
    if (!password || password.trim() === '') {
        return false;
    }
    
    if (password.length < 8) {
        return false;
    }
    
    return true;
}

module.exports = validate;