import express from 'express';
const router = express.Router();
import * as expensesService from '../service/expenses-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await expensesService.getAllExpenses())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await expensesService.getExpensesById(req.params.id))));

// router.get('/mail/:email', asyncHandler(async (req, res, next) => 
// res.status(200).send(await expensesService.getexpensesByEmail(req.params.email))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await expensesService.createExpenses(req.body))));

router.post('/check', asyncHandler(async (req, res, next) => 
res.status(200).send(await expensesService.checkexpenses(req.body))));


router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await expensesService.updateexpenses(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await expensesService.deleteExpenses(req.params.id))));


export default router;

