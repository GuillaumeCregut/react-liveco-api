const router=require('express').Router();
const PirateControler=require('../controler/pirates.controler');


router.get('/',(req,res)=>{
    const pirateList=PirateControler.PirateGetAll();
    res.status(200).json(pirateList);
})
module.exports=router;