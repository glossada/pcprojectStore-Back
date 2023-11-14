const axios = require('axios');
const {Excersise}=require('../../db');


const createExcersise= async ({name,description,image,series,repetitions})=>{
    const excersise={
        name:name,
        description:description,
        image:image,
        series:series,
        repetitions:repetitions,
    }
    const newExcersise= await Excersise.create(excersise);
    return newExcersise;
}

module.exports = createExcersise;