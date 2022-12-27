"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Staff_controller_1 = require("../controller/Staff.controller");
const StaffControllers = new Staff_controller_1.StaffController();
const StaffRouter = (0, express_1.Router)();
StaffRouter.get("/list", StaffControllers.showListNv);
StaffRouter.get("/add", StaffControllers.showFormAddEmploy);
StaffRouter.post("/add", StaffControllers.addEmployee);
StaffRouter.get("/delete", StaffControllers.deleteEmployee);
StaffRouter.get("/update", StaffControllers.showFormUpdate);
StaffRouter.post("/update", StaffControllers.updateEmployee);
StaffRouter.get("/detail/:id", StaffControllers.detailEmployee);
exports.default = StaffRouter;
//# sourceMappingURL=Staff.router.js.map