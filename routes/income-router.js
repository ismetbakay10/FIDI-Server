import express from 'express';
const router = express.Router();
import * as incomeService from '../service/income-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.getAllIncome())));

router.get('/:id_income', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.getIncomeById(req.params.id_income))));

// router.get('/mail/:email', asyncHandler(async (req, res, next) => 
// res.status(200).send(await incomeService.getincomeByEmail(req.params.email))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.createIncome(req.body))));

router.post('/check', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.checkIncome(req.body))));


router.put('/:id_income', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.updateIncome(req.params.id_income, req.body))));

router.delete('/:id_income', asyncHandler(async (req, res, next) => 
res.status(200).json(await incomeService.deleteIncome(req.params.id_income))));


export default router;

