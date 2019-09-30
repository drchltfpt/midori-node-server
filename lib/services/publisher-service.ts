/**
* ©2019-2020 Midori Book Store
*/
import * as mongoose from 'mongoose';
import { PublisherSchema } from '../models/publisher-model';

const Publisher = mongoose.model('Publisher', PublisherSchema);
export class PublisherService {
    public addNewPublisher (publisherInfo) {
        let newPublisher = new Publisher(publisherInfo)
        
        newPublisher.save()
    }
}