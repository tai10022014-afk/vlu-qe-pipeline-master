const { login } = require("./auth");

describe("Regression Test - Chức năng đăng nhập", () => {

    test("Mật khẩu sai", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username sai", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(() => login("", "123"))
            .toThrow("Username không được để trống");
    });

    test("Username chỉ chứa khoảng trắng", () => {
        expect(() => login("   ", "123"))
            .toThrow("Username không được để trống");
    });

    test("Mật khẩu rỗng", () => {
        expect(() => login("admin", ""))
            .toThrow("Password không được để trống");
    });

    test("Mật khẩu chỉ chứa khoảng trắng", () => {
        expect(() => login("admin", "   "))
            .toThrow("Password không được để trống");
    });

    test("Mật khẩu chứa ký tự đặc biệt", () => {
        expect(() => login("admin", "123@"))
            .toThrow("Mật khẩu không được chứa ký tự đặc biệt");
    });

    test("Mật khẩu chứa ký tự đặc biệt #", () => {
        expect(() => login("admin", "123#"))
            .toThrow("Mật khẩu không được chứa ký tự đặc biệt");
    });

    test("Tài khoản bị khóa", () => {
        expect(() => login("locked", "123"))
            .toThrow("Tài khoản đã bị khóa");
    });

    test("Tài khoản bị khóa dù nhập mật khẩu khác", () => {
        expect(() => login("locked", "456"))
            .toThrow("Tài khoản đã bị khóa");
    });

    test("Username không tồn tại", () => {
        expect(login("student", "123")).toBe(false);
    });

    test("Mật khẩu có chữ cái nhưng không đúng", () => {
        expect(login("admin", "abc")).toBe(false);
    });

});
