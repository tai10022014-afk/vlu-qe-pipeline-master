function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === "") {
        throw new Error("Username không được để trống");
    }

    // Kiểm tra password rỗng
    if (!password || password.trim() === "") {
        throw new Error("Password không được để trống");
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        throw new Error("Tài khoản đã bị khóa");
    }

    // Mật khẩu chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        throw new Error("Mật khẩu không được chứa ký tự đặc biệt");
    }

    // Kiểm tra tài khoản admin
    if (username === "admin" && password === "123") {
        return true;
    }

    // Sai username hoặc password
    return false;
}

module.exports = { login };
