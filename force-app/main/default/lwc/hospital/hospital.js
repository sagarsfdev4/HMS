import { api, LightningElement, track } from 'lwc';

import hospital_Object from "@salesforce/schema/Hospital__c";
import hospitalName from "@salesforce/schema/Hospital__c.Hospital_Name__c";
import hospitalBranch from "@salesforce/schema/Hospital__c.Branch__c";
import hospitalAddress from "@salesforce/schema/Hospital__c.Address__c";

export default class Hospital extends LightningElement {

    @api objectName = hospital_Object;
    @api objctFields = [
        hospitalName,
        hospitalBranch,
        hospitalAddress
    ];

    @api isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
}