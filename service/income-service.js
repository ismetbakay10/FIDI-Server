import * as incomeRepository from '../persistency/income-repository.js'


export async function createIncome(pMember){
    return await incomeRepository.create(pMember);
}


export async function deleteIncome(pId){
    return await incomeRepository.remove(pId);
}

export async function getAllIncome(){
    return await incomeRepository.getAll();
}

export async function getIncomeById(pId){
    return await incomeRepository.findById(pId);
}

export async function updateIncome(pId, pUpdateEntity){
    return await incomeRepository.update(pId, pUpdateEntity);
}





