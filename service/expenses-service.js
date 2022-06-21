import * as expensesRepository from '../persistency/expenses-repository.js'


export async function createExpenses(pMember){
    return await expensesRepository.create(pMember);
}


export async function deleteExpenses(pId){
    return await expensesRepository.remove(pId);
}

export async function getAllExpenses(){
    return await expensesRepository.getAll();
}

export async function getExpensesById(pId){
    return await expensesRepository.findById(pId);
}

export async function updateExpenses(pId, pUpdateEntity){
    return await expensesRepository.update(pId, pUpdateEntity);
}





