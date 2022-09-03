import { api, LightningElement } from 'lwc';

export default class CreateHospital extends LightningElement {

    @api objectName;
    @api objctFields = [];

    @api isShowModal = false;

    sendToParent(){
        this.dispatchEvent(new CustomEvent('close'));
    }
}