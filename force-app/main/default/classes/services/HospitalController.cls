/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-16-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class HospitalController {
    
    public HospitalController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Hospital__c> getAllHospitals(){
        try {

            return [SELECT Hospital_Name__c, Branch__c, Address__c FROM Hospital__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
