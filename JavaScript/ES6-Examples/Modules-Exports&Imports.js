// JS-Test1.js File

const defaultExportedMember = 'DefaultExportedMember';

export default defaultExportedMember;

// JS-Test2.js File

export const ExpMem1 = "EXP mem 1";
export const ExpMemFn2 = () => 'Exported Mem2 Fn'; 

// Main.js File

import AliasOrOriginalName from './JS-Test1.js'; // The name can be anything if we use this syntax it will be assigned to the default exported member;

// If file has multiple export members which are not marked as default can be imported through selective import syntax {} and named exports

import { ExpMem1, ExpMemFn2 } from './JS-Test2.js'; // NOTE: Name should be matched with the name which is exported in the file

// Alias importing in selective imports
import { ExpMem1 as Alias1} from './JS-Test2.js';

// Bundled import while importing
import * as BundleName from './JS-Test2.js'; // Will be exported all the members as an object

// Can be accessible like
BundleName.ExpMem1
BundleName.ExpMemFn2()
