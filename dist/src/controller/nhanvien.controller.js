"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanvienController = void 0;
const nhanVien_model_1 = require("../schema/nhanVien.model");
const branch_model_1 = require("../schema/branch.model");
class NhanvienController {
    async showListNv(req, res) {
        const branchs = await branch_model_1.Branch.find();
        const nhanviens = await nhanVien_model_1.Nhanvien.find().populate('branch');
        res.render('danhsachNV', { data: nhanviens });
    }
    async showFormAddEmploy(req, res) {
        const branchs = await branch_model_1.Branch.find();
        res.render('addemployee', { data: branchs });
    }
    async addEmployee(req, res) {
        const branchID = req.body.branch;
        const branchSelect = await branch_model_1.Branch.findOne({ _id: branchID });
        const nhanvienNew = new nhanVien_model_1.Nhanvien({
            maNV: req.body.maNV,
            name: req.body.name,
            age: +(req.body.age),
            salary: +(req.body.salary),
            branch: branchSelect
        });
        await nhanvienNew.save();
        res.redirect('/nhanvien/listnv');
    }
    async deleteEmployee(req, res) {
        let employee = await nhanVien_model_1.Nhanvien.findOne({ _id: req.query.id });
        await employee.remove();
        res.redirect('/nhanvien/listnv');
    }
    async updateEmployee(req, res) {
        const branchID = req.body.branch;
        const branchSelect = await branch_model_1.Branch.findOne({ _id: branchID });
        console.log(branchSelect);
        let employee = await nhanVien_model_1.Nhanvien.findOne({ _id: req.body._id });
        console.log(employee);
        employee.maNV = req.body.maNV;
        employee.name = req.body.name;
        employee.age = req.body.age;
        employee.salary = req.body.salary;
        employee.branch = req.body.branch;
        await employee.save();
        res.redirect('/nhanvien/listnv');
    }
    async showFormUpdate(req, res) {
        const nhanvien = await nhanVien_model_1.Nhanvien.findOne({ _id: req.query.id }).populate('branch');
        const branchs = await branch_model_1.Branch.find();
        let data = {
            nhanvien: nhanvien,
            branchs: branchs
        };
        res.render('update', { data });
    }
}
exports.NhanvienController = NhanvienController;
//# sourceMappingURL=nhanvien.controller.js.map