import express from 'express';
const router = express.Router();
import * as basicInfoService from '../service/basicInfo-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await basicInfoService.getAllBasicInfo())));

router.get('/userId/:userId', asyncHandler(async (req, res, next) => 
res.status(200).send(await basicInfoService.getBasicInfoByUserId(req.params.userId))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await basicInfoService.createBasicInfo(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await basicInfoService.updateBasicInfo(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await basicInfoService.deleteBasicInfo(req.params.id))));


export default router;

