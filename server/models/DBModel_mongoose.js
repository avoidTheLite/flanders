import {mongoose} from 'mongoose'

const reshapingOptions = {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
        return ret;
    }

}

const documentSchema = new mongoose.Schema({
    topLevelProp:{
        type: Array,
        required: true,
        nested:{
            seceondLevelProp1:{
                type: String,
                required: true
            },
            seceondLevelProp2:{
                type: String,
                required: true                
            }


        }
    }
}, { toJSON: reshapingOptions}
)

const DBModel = mongoose.model('DBModel',documentSchema)

export default DBModel