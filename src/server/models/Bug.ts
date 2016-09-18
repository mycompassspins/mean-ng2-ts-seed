/**
 * Created by Justin on 9/2/16.
 */

import { IBug } from '../interfaces'
import { Schema, model, Model } from 'mongoose'

let bugSchema = new Schema({
	controller: { type: String },
	method: { type: String },
	stack: { type: Object },
	date: { type: Date, "default": Date.now }
});

export const Bug:Model<IBug> = model<IBug>('Bug', bugSchema);
