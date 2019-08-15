/* 
 * AngularJS front-end webapp for MD-frontend project.
 * 
 * MD-frontend project - app.js
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */


var MDapp = angular.module("MDapp", ['ngSanitize', 'btford.markdown']);

MDapp.config(['markdownConverterProvider', function (markdownConverterProvider) {
    // options to be passed to Showdown
    // see: https://github.com/coreyti/showdown#extensions
    markdownConverterProvider.config({
        extensions: ['prettify']
    });
}])