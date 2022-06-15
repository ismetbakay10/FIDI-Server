import express from 'express';
const router = express.Router();
import * as incomeService from '../service/income-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.getAllincome())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.getincomeById(req.params.id))));

// router.get('/mail/:email', asyncHandler(async (req, res, next) => 
// res.status(200).send(await incomeService.getincomeByEmail(req.params.email))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.createincome(req.body))));

router.post('/check', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.checkincome(req.body))));


router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await incomeService.updateincome(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await incomeService.deleteincome(req.params.id))));


export default router;

