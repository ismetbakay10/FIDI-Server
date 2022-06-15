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
// export async function getexpensesByEmail(pEmail){
//     return await expensesRepository.findByEmail(pEmail);
// }
export async function updateexpenses(pId, pUpdateEntity){
    return await expensesRepository.update(pId, pUpdateEntity);
}





