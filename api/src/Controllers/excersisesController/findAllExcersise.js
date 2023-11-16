const {Excersise}=require('../../db');

const findAllExcersise = async()=>{
const excersisesFinded= await Excersise.findAll()

if(excersisesFinded){
    return excersisesFinded
}else{
    return [];
}
}

module.exports=findAllExcersise;