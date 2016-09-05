/**
 * Created by Justin on 9/2/16.
 */

import { IBug } from '../interfaces'
import mongoose = require('mongoose');

let bugSchema = new mongoose.Schema({
	controller: { type: String },
	method: { type: String },
	stack: { type: Object },
	date: { type: Date, "default": Date.now }
});

export const Bug = mongoose.model<IBug>('Bug', bugSchema);
