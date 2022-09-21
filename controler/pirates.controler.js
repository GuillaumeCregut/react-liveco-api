const PiratesModel=require('../models/pirates.model');

const PirateGetAll =()=>{
    
    return PiratesModel.GetAll();
}

module.exports={
PirateGetAll,
};