const findAllExcersise = require('../../Controllers/excersisesController/findAllExcersise');

const getAllxccersise = async (req,res)=>{

    try {
    const excersisesFinded= await findAllExcersise();
    if(excersisesFinded.length===0){
        res.status(404).json({ Error: 'No hay nada, solo la oscuridad eterna de tu corazón' })
    }else if (excersisesFinded.length>0){
        res.status(200).json(excersisesFinded);
    }
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
    
}

module.exports=getAllxccersise;