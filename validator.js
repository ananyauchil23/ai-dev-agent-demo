function validate(username, password){

    if(password.length < 6){
        return "Password must be at least 6 characters long";
    }

    return true;
}

module.exports = validate;