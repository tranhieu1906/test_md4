import { Staff } from "../schema/Staff.model";
import { Branch } from "../schema/branch.model";
import { Schema } from "mongoose";

export class StaffController {
  async showListNv(req: any, res: any) {
    const branchs = await Branch.find();
    const Staffs = await Staff.find().populate("branch").sort({ age: 1 });

    res.render("danhsachNV", { data: Staffs });
  }

  async showFormAddEmploy(req: any, res: any) {
    const branchs = await Branch.find();
    res.render("addemployee", { data: branchs });
  }

  async addEmployee(req: any, res: any) {
    const branchID = req.body.branch;
    const branchSelect = await Branch.findOne({ _id: branchID });
    const StaffNew = new Staff({
      maNV: req.body.maNV,
      name: req.body.name,
      age: +req.body.age,
      salary: +req.body.salary,
      branch: branchSelect,
    });
    await StaffNew.save();
    res.redirect("/list");
  }

  async deleteEmployee(req: any, res: any) {
    let employee = await Staff.findOne({ _id: req.query.id });
    await employee.remove();
    res.redirect("/list");
  }

  async updateEmployee(req: any, res: any) {
    const branchID = req.body.branch;
    const branchSelect = await Branch.findOne({ _id: branchID });
    console.log(branchSelect);
    let employee = await Staff.findOne({ _id: req.body._id });
    console.log(employee);
    employee.maNV = req.body.maNV;
    employee.name = req.body.name;
    employee.age = req.body.age;
    employee.salary = req.body.salary;
    employee.branch = req.body.branch;
    await employee.save();
    res.redirect("/list");
  }

  async showFormUpdate(req: any, res: any) {
    const Staffs = await Staff.findOne({ _id: req.query.id }).populate(
      "branch"
    );
    const branchs = await Branch.find();
    let data = {
      Staff: Staffs,
      branchs: branchs,
    };
    res.render("update", { data });
  }
  async detailEmployee(req, res) {
    const Staffs = await Staff.findOne({ _id: req.params.id }).populate(
      "branch"
    );
    res.render("detail", { data: Staffs });
  }
}
