import template from "./textInputField.html";
import controller from "./textInputField.controller";

/**
 */
export default function TextInputComponent() {
    return {
        restrict: "E",
        template,
        scope: {},
        bindToController: {
            ngModel: "=",
            sgLabel: "@",
            required: "=?",
            ngPattern: "@?"
        },
        controller,
        controllerAs: "textInputCtrl",
        transclude: true
    };
}
