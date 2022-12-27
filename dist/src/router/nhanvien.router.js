"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StaffController = new StaffController();
const StaffRouter = (0, express_1.Router)();
StaffRouter.get('/list', (req, res) => {
    StaffController.showListNv(req, res);
});
StaffRouter.get('/add', (req, res) => {
    StaffController.showFormAddEmploy(req, res);
});
StaffRouter.post('/add', (req, res) => {
    StaffController.addEmployee(req, res);
});
StaffRouter.get('/delete', (req, res) => {
    StaffController.deleteEmployee(req, res);
});
StaffRouter.get('/update', (req, res) => {
    StaffController.showFormUpdate(req, res);
});
StaffRouter.post('/update', (req, res) => {
    StaffController.updateEmployee(req, res);
});
exports.default = StaffRouter;
//# sourceMappingURL=nhanvien.router.js.map