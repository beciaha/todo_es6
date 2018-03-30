import {$ew,qs,typeWriter} from './helpers';
import {Template} from './template';
import {View} from "./view";
import {Controller} from "./controller";
import {Storage }from './storage';

const template = new Template();
const view = new View(template);
const storage = new Storage("todo");
const controller = new Controller(view,storage);
typeWriter();
$ew(window, 'load', typeWriter);

