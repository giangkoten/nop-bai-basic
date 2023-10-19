import * as glassService from "../services/todo.service";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    let [data] = await glassService.getAll();

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get all",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    let { work } = req.body;
    await glassService.createOne(work);
    res.json({
      message: "Create successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;

    await glassService.deleteOneById(+id);
    res.json({
      message: "Xóa thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const putOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    await glassService.updateOne(+id);
    res.json({
      message: "Update successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
