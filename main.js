var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Staff.prototype.getName = function () {
        return this._name;
    };
    Staff.prototype.setName = function (value) {
        this._name = value;
    };
    Staff.prototype.getEmail = function () {
        return this._email;
    };
    Staff.prototype.setEmail = function (value) {
        this._email = value;
    };
    Staff.prototype.getAge = function () {
        return this._age;
    };
    Staff.prototype.setAge = function (value) {
        this._age = value;
    };
    return Staff;
}());
var staff = new Staff('viet 1', 'vmk@gmail.com', 18);
var staffName = staff.getName();
console.log(staffName);
staff.setName('viet 2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
