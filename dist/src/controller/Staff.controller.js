"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffController = void 0;
const Staff_model_1 = require("../schema/Staff.model");
const branch_model_1 = require("../schema/branch.model");
class StaffController {
    async showListNv(req, res) {
        const branchs = await branch_model_1.Branch.find();
        const Staffs = await Staff_model_1.Staff.find().populate("branch").sort({ age: 1 });
        res.render("danhsachNV", { data: Staffs });
    }
    async showFormAddEmploy(req, res) {
        const branchs = await branch_model_1.Branch.find();
        res.render("addemployee", { data: branchs });
    }
    async addEmployee(req, res) {
        const branchID = req.body.branch;
        const branchSelect = await branch_model_1.Branch.findOne({ _id: branchID });
        const StaffNew = new Staff_model_1.Staff({
            maNV: req.body.maNV,
            name: req.body.name,
            age: +req.body.age,
            salary: +req.body.salary,
            branch: branchSelect,
        });
        await StaffNew.save();
        res.redirect("/list");
    }
    async deleteEmployee(req, res) {
        let employee = await Staff_model_1.Staff.findOne({ _id: req.query.id });
        await employee.remove();
        res.redirect("/list");
    }
    async updateEmployee(req, res) {
        const branchID = req.body.branch;
        const branchSelect = await branch_model_1.Branch.findOne({ _id: branchID });
        console.log(branchSelect);
        let employee = await Staff_model_1.Staff.findOne({ _id: req.body._id });
        console.log(employee);
        employee.maNV = req.body.maNV;
        employee.name = req.body.name;
        employee.age = req.body.age;
        employee.salary = req.body.salary;
        employee.branch = req.body.branch;
        await employee.save();
        res.redirect("/list");
    }
    async showFormUpdate(req, res) {
        const Staffs = await Staff_model_1.Staff.findOne({ _id: req.query.id }).populate("branch");
        const branchs = await branch_model_1.Branch.find();
        let data = {
            Staff: Staffs,
            branchs: branchs,
        };
        res.render("update", { data });
    }
    async detailEmployee(req, res) {
        const Staffs = await Staff_model_1.Staff.findOne({ _id: req.params.id }).populate("branch");
        res.render("detail", { data: Staffs });
    }
}
exports.StaffController = StaffController;
//# sourceMappingURL=Staff.controller.js.map