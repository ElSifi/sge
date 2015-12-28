var swaggerGE = angular.module("SwaggerGraphicalEditor", ['ui.materialize']);

/*swaggerGE.directive("pathCreator", ['$compile', function($compile) {
    return {

        link: function(scope, element, attrs){

            element.bind("click", function(){
                angular.element(
                    document.getElementById('addPath'))
                    .append($compile('<info-item  enabled-info="editorEnabled" swagger-base="basicInfo" item="name" disable-edit="disableEditors()" enable-edit="enableEditor(property)"></info-item>')(scope));
		      });

        }
    }
}]);*/

swaggerGE.directive("pathModal",
  function(){
    return{
      restrict: 'E',
      replace:'true',
      templateUrl: 'js/templates/PathModal.tmpl.html',
      controller:'PathModalController',
    }
  });

swaggerGE.directive("parameterModal",
  function(){
    return{
      restrict: 'E',
      replace:'true',
      templateUrl: 'js/templates/ParameterModal.tmpl.html',
      controller:'ParameterModalController',
    }
  });

swaggerGE.directive("responseModal",
  function(){
    return{
      restrict: 'E',
      replace:'true',
      templateUrl: 'js/templates/ResponseModal.tmpl.html',
      controller:'ResponseModalController',
    }
  });

swaggerGE.directive("definitionCreationModal",
  function(){
    return{
      restrict: 'E',
      replace:'true',
      templateUrl: 'js/templates/DefinitionCreationModal.tmpl.html',
      controller:'DefinitionCreationController',
    }
  });

  swaggerGE.directive("definitionEditorModal",
    function(){
      return{
        restrict: 'E',
        replace:'true',
        templateUrl: 'js/templates/DefinitionEditorModal.tmpl.html',
        controller:'DefinitionEditorController',
      }
    });

swaggerGE.directive("focusOnLoad", [
  function(){
    return{
      scope:{ focus: '@focusOnLoad'},
      //controller: "PathController",
      link: function(scope, element, attrs){
        console.log("PATHMODALFOCUS");
        console.log(focus);
        scope.$watch("focus", function(newVal){
          console.log("PATHMODALFOCUS - CHANGED!");
          if(newVal === "true"){
            console.log("PATHMODALFOCUS - TRUE!!");
            element[0].focus();
            //scope.focusPathModal = false;
          }
        })

      },

    }

}]);

swaggerGE.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});

/**
 *  Mark updated
*/
swaggerGE.directive("selectValue", function(){
    return {
        link: function(scope, element, attrs){

           scope.$watch('updateParamModal', function(update){
               if(update){
                   var paramIn = scope.currentParam.inLocation;

                   for(var i = 1; i < 6; i++){
                        //console.log(element.children()[i]);
                        //console.log(element.children()[i].value);
                        if(paramIn === element.children()[i].value){

                            var child = angular.element(element.children()[i]);
                            child.attr('selected', '');
                        }
                    }

                   scope.updateParamModal = false;
               }
           })

        }
    }
});

swaggerGE.directive("closePathModal", function(){
    return {
      link: function(scope, element, attrs){
        //console.log(scope);
        scope.$watch('closePathModal', function(update){
          //console.log("CLOSE PATH MODAL");
          if(scope.closePathModal === true){
            $('#path-creation-modal').closeModal();
            scope.closePathModal = false;
          }
        });


      }
    }
});

swaggerGE.directive("closeDefinitionCreationModal", function(){
    return {
      link: function(scope, element, attrs){
        //console.log(scope);
        scope.$watch('closeModal', function(update){
          if(scope.closeModal === true){
            $('#definition-creation-modal').closeModal();
            scope.closeModal = false;
          }
        });


      }
    }
});

swaggerGE.directive("closeDefinitionEditorModal", function(){
    return {
      link: function(scope, element, attrs){
        //console.log(scope);
        scope.$watch('closeModal', function(update){
          if(scope.closeModal === true){
            $('#definition-editor-modal').closeModal();
            scope.closeModal = false;
          }
        });


      }
    }
});

/*
swaggerGE.directive("colorize", function(){
    return {
      scope: {

      },
      link: function(scope, element, attrs){


          ng-class="{'blue': '{{operation}}' == 'get',
            'orange': '{{operation}}' === 'put',
            'green': '{{operation}}' === 'post',
            'red': '{{operation}}' === 'delete', }"

          //  operation = element.text();

//            if()

            console.log("operation: " + operation);

            switch(operation){

            }

        }
    }
});*/

/*swaggerGE.directive("modalFocus", function(){
    return {
      scope: {

      },
      link: function(scope, element, attrs){

          //attrs.focus

        }
    }
});*/

swaggerGE.directive("uniqueCheckbox", ["$interval", function($interval) {
    return {
        restrict: "AE",
        //templateUrl: 'js/templates/checkboxTemplate.html',
        replace: true,
        scope: {
            //toggleOp: '&',
            //uniqueId: '&',
            //pathObject: '=',
            //operation: '='
        },
        link: function(scope, elem, attrs) {

            //var uid = scope.uniqueId({pathObj: scope.pathObject, oprtn: scope.operation});

            var input = angular.element(document.getElementById('input'));
            input.removeAttr('id');
            input.attr('id', scope.$id);

            var label = angular.element(document.getElementById('label'));
            label.removeAttr('id');
            label.removeAttr('for');
            label.attr('for', scope.$id);

            //console.log(scope.operation);

            //thisOperation = scope.operation.toLowerCase();
            //console.log(thisOperation);
            //console.log(scope.pathObject.currentPathOperations);
            //console.log(scope.pathObject.currentPathOperations[thisOperation]);
            //check if this operation was chosen and add the checkmark if it has been.

            //if(scope.pathObject.currentPathOperations[thisOperation]){
              //  console.log('success');
            //    input.attr('checked', 'checked');
            //}
            //console.log('------------');
        }
    }
}]);