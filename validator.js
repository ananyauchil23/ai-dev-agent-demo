function validate(username, password) {
    // Validate username
    if (!username || username.trim() === '') {
        return { isValid: false, message: 'Username is required' };
    }
    if (username.length < 4) {
        return { isValid: false, message: 'Username must be at least 4 characters' };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { isValid: false, message: 'Username can only contain letters, numbers, and underscores' };
    }

    // Validate password
    if (!password || password.trim() === '') {
        return { isValid: false, message: 'Password is required' };
    }
    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters' };
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one number' };
    }

    return { isValid: true };
}

module.exports = validate;