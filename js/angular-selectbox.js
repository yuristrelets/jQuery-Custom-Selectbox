(function(window, angular, undefined) {
    'use strict';

    var sbSelectBoxModule = angular.module('sbSelectBox', []);

    sbSelectBoxModule
        .directive('sbSelect', ['$parse', function($parse) {

            return {
                restrict: 'AC',
                terminal: true,
                link: function(scope, element, attrs) {

                    var model = $parse(attrs.ngModel);

                    var cselect = new SelectBox({
                            selectbox: element,
                            height: attrs.sbHeight || 400,
                            width: attrs.sbWidth || 200,
                            changeCallback: function(val) {
                                try {
                                    scope[attrs.sbCallback](val);

                                } catch(err) {
                                    // nothing
                                }
                            }
                        });

                    scope.$watch(model, function() {
                        cselect.sync();
                    });

                }
            }

        }]);

})(window, window.angular);