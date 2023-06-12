import express from "express";
import { Brand } from "../models/Brand";
import { BrandController } from "../controller/BrandController";
import { BrandBusiness } from "../business/BrandBusiness";
import { BrandDatabase } from "../database/BrandDatabase";

export const brandRouter = express.Router()

const brandDatabase = new BrandDatabase()
const brandBusiness = new BrandBusiness(brandDatabase)
const brandController = new BrandController(brandBusiness)

brandRouter.get("/", brandController.findAllBrands)
brandRouter.post("/", brandController.createBrand)
brandRouter.put("/:id", brandController.editBrand)
brandRouter.delete("/:id", brandController.deleteBrand)