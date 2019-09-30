/**
* ©2019-2020 Midori Book Store
*/
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PublisherSchema = new Schema ({
    company: {
        type: String,
        required: 'The publishing company cannot be empty'
    },
    address1: {
        type: String,
        required: 'The provincial can not be empty'
    },
    address2: {
        type: String,
        required: 'The distict can not be empty'
    },
    address3: {
        type: String
    },
    phone1: {
        type: String
    },
    phone2: {
        type: String
    },
    taxCode: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: String
    }
})