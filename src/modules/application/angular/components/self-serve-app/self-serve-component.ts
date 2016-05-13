import Component from '../../../../../decorators';

import "md-steppers";

import "angular-material/angular-material.min.css";
import "md-steppers/dist/md-steppers.css";

@Component('app.application', 'selfServeComponent', {
    controllerAs : 'ctrl',
    template: `<md-content flex="100">
    <div>
    <md-card>
    <md-toolbar>
    <div class="md-toolbar-tools">
        <h2>
            <span>Self Serve Signup Process</span>
        </h2>
    </div>
    </md-toolbar>
    <md-stepper-card-content class="md-no-padding">
       <md-steppers md-dynamic-height md-stretch-steppers="always" md-selected="ctrl.selectedStep" md-busy-text="'Processing...'" md-busy="ctrl.showBusyText">
           <md-step label="Welcome" ng-disabled="ctrl.stepProgress < 1">
               <md-step-body>
                 <form name="Welcome" ng-submit="ctrl.submitCurrentStep(ctrl.stepData[0].data)">
                    <md-content class="md-padding">
                        <div layout="row" layout-align="center top">
                            <div flex="nogrow">
                                <h4>Please validate your info</h4>
                                <md-input-container class="md-block">
                                    <label>Your email</label>
                                    <input ng-disabled="true" name="email" ng-model="ctrl.stepData[0].data.email"/>
                                </md-input-container>
                                <md-input-container class="md-block">
                                    <label>Your organisation</label>
                                    <input ng-disabled="true" name="organisation" ng-model="ctrl.stepData[0].data.organisation" />
                                </md-input-container>
                                <md-checkbox ng-model="ctrl.stepData[0].data.validated">I confirm that my infos are valid</md-checkbox>

                            </div>
                        </div>
                    </md-content>
                    <md-step-actions layout="row">
                        <div flex layout="row" layout-align="end top">
                            <md-button type="submit" ng-disabled="!ctrl.stepData[0].data.validated || ctrl.showBusyText" class="md-primary md-raised">NEXT</md-button>
                        </div>
                    </md-step-actions>
                 </form>
               </md-step-body>
           </md-step>
           <md-step label="Link Ad Accounts" ng-disabled="ctrl.stepProgress < 2">
               <md-step-body>
                   <md-content layout="row" layout-align="center center">
                     <md-card class="adwords-logo"></md-card>
                     <md-card class="adcenter-logo"></md-card>
                   </md-content>
                   <md-step-actions layout="row">
                        <div flex layout="row" layout-align="end top">
                          <md-button ng-click="ctrl.moveToPreviousStep()">PREVIOUS</md-button>
                          <md-button ng-click="ctrl.submitCurrentStep(ctrl.stepData[1].data)" ng-disabled="!ctrl.stepData[1].data.validated || ctrl.showBusyText" class="md-primary md-raised">NEXT</md-button>
                        </div>
                   </md-step-actions>
               </md-step-body>
           </md-step>
           <md-step label="Account Set Up" ng-disabled="ctrl.stepProgress < 3">
               <md-step-body>Let's start</md-step-body>
           </md-step>
       </md-steppers>
    </md-stepper-card-content>
    </md-card>
    </div>
    </md-content>`
})
export class SelfServeComponent {
    selectedStep: number;
    stepProgress: number;
    maxStep: number;
    showBusyText: boolean;
    stepData = [];

    static $inject = ["$q", "$timeout"];
    constructor(private $q, private $timeout) {
        console.log('SelfServeComponent constructor...');
        this.selectedStep = 0;
        this.stepProgress = 1;
        this.maxStep = 3;
        this.showBusyText = false;
        this.stepData = [
            { step: 1, completed: false, optional: false, data: { validated: false, email: 'yrichard@acquisio.com', organisation: 'Acquisio' } },
            { step: 2, completed: false, optional: false, data: { validated: true } },
            { step: 3, completed: false, optional: false, data: {} }];
    }

    public nextStep(): void {
        //do not exceed into max step
        if (this.selectedStep >= this.maxStep) {
            return;
        }
        //do not increment stepProgress when submitting from previously completed step
        if (this.selectedStep === this.stepProgress - 1) {
            this.stepProgress = this.stepProgress + 1;
        }
        this.selectedStep = this.selectedStep + 1;
    }

    public moveToPreviousStep():void {
        if (this.selectedStep > 0) {
            this.selectedStep = this.selectedStep - 1;
        }
    }

    public submitCurrentStep(stepData, isSkip):void {
        var deferred = this.$q.defer();
        this.showBusyText = true;
        var self = this;
        if (!stepData.completed && !isSkip) {
            //simulate $http
            this.$timeout(function () {
                self.showBusyText = false;
                deferred.resolve({status: 200, statusText: 'success', data: {}});
                //move to next step when success
                stepData.completed = true;
                self.nextStep();
            }, 1000)
        } else {
            this.showBusyText = false;
            this.nextStep();
        }
    }
}
