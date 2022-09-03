import { LightningElement, track, wire } from 'lwc';

import getAllHospitals from '@salesforce/apex/HospitalController.getAllHospitals';
import hospital_Object from "@salesforce/schema/Hospital__c";
import hospitalName from "@salesforce/schema/Hospital__c.Hospital_Name__c";
import hospitalBranch from "@salesforce/schema/Hospital__c.Branch__c";
import hospitalAddress from "@salesforce/schema/Hospital__c.Address__c";

const COLS = [
    {
        label : 'Name',
        fieldName : 'Hospital_Name__c'
    },
    {
        label : 'Branch',
        fieldName : 'Branch__c'
    },
    {
        label : 'Address',
        fieldName : 'Address__c'
    }
];


export default class ShowHospitals extends LightningElement {

    @track hospitalList;
    @track columns = COLS;
    
    @wire(getAllHospitals)getHospitals({data,error})
    {
        if(data)
        {
            this.hospitalList = data;
            console.log('HOSPITALS :: '+JSON.stringify(this.hospitalList));
        }
        else if(error)
        {
            alert(error);
        }
    }

    handleSelectedRecord()
    {
        alert('handleSelectedRecord');
    }
}