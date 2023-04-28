import { LightningElement ,api} from 'lwc';

export default class Button extends LightningElement {

    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
      }));
      //changes made in remote
      //changes accepted in local
      //changed again
    }
}
