/**
 * Created by Justin on 9/2/16.
 */

// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../node_modules/typescript/lib/lib.es6.d.ts" />

import { NavComponent } from './nav/NavComponent'
import { HomeComponent } from './home/HomeComponent'
import { ComponentLoading } from './loading/ComponentLoading'

export { NavComponent, HomeComponent, ComponentLoading }
export const COMPONENTS = [ NavComponent, HomeComponent, ComponentLoading ];
