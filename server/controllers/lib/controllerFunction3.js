import DBModel from "../../models/DBModel.js";
import { callExternalAPI } from "../../services/callExternalAPI.js";

export async function controllerFunction3(req, res) {
    const bodyParameter1 = req.body.bodyParameter1;
    var scaffoldingFromDatabase = {};

    try {
        scaffoldingFromDatabase = await DBModel.findByID(bodyParameter1).lean()
        const responseExternalAPI = await callExternalAPI(bodyParameter1);
    } catch(error){console.log(error)}
    
    try {
        await DBModel.findByIdAndUpdate(bodyParameter1, scaffoldingFromDatabase, {new: true});
    } catch (error) {console.log(error)
        
    }

    return scaffoldingFromDatabase
}
