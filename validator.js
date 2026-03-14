function validate(username, password){

    if(!username || !password) {
        return false;
    }

    return true;
}

module.exports = validate;