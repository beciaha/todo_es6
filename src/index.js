import {$ew} from './helpers';
import {Template} from './template';
import {View} from "./view";
import {Controller} from "./controller";

let listMock = [
    {
        id: "0",
        title:"someName"
    },
    {
        id: "1",
        title:"someName2"
    }
    
];
const template = new Template();
const view = new View(template);
const controller = new Controller(view,listMock);

