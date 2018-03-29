import {$ew,qs} from './helpers';
import {Template} from './template';
import {View} from "./view";
import {Controller} from "./controller";

let listMock = [
    {
        id: "0",
        title:"write good code",
        checked:"checked"
    },
    {
        id: "1",
        title:"find good job",
        checked:"unchecked"
    }
    
];
const template = new Template();
const view = new View(template);
const controller = new Controller(view,listMock);

const typeWriter= (function () {
    let i = 0;
    let txt = 'What needs to be done?';
    let speed = 80;
    let id = qs('.new-item');
    return function(){ if (i < txt.length) {
        id.placeholder += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }}
})();

$ew(window, 'load', typeWriter);

