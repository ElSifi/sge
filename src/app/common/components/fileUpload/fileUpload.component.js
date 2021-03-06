/**
 */
export default function FileUploadComponent() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            // debugger;
            // need to evaluate the attribute so it manually creates a reference
            //  from the onChangeHandler variable to the passed function
            var onChangeHandler = scope.$eval(attrs.customOnChange);

            // bind the onChangeHandler function to the change even on the element
            element.bind("change", onChangeHandler);
        }
    };
}
