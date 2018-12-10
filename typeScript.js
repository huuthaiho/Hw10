var University = /** @class */ (function () {
    function University() {
    }
    University.prototype.contructor = function (uname, udept) {
        this.name = uname;
        this.dept = udept;
    };
    University.prototype.graduation = function (year) {
        console.log('Graduating ${this.dept} ${year} students');
    };
    return University;
}());
var uni = new University("MUM","Computer Science");
uni.graduation(2018);
