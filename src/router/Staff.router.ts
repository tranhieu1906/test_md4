import { Router } from "express";
import { StaffController } from "../controller/Staff.controller";

const StaffControllers = new StaffController();
const StaffRouter = Router();

StaffRouter.get("/list", StaffControllers.showListNv);

StaffRouter.get("/add", StaffControllers.showFormAddEmploy);

StaffRouter.post("/add", StaffControllers.addEmployee);

StaffRouter.get("/delete", StaffControllers.deleteEmployee);

StaffRouter.get("/update", StaffControllers.showFormUpdate);
StaffRouter.post("/update", StaffControllers.updateEmployee);

StaffRouter.get("/detail/:id", StaffControllers.detailEmployee);

StaffRouter.get("/admin/employees/search/room", StaffControllers.searchByRoom);
export default StaffRouter;
