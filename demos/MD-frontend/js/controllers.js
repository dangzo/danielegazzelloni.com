/* 
 * Provides controllers to the app.
 * 
 * 
 * MD-frontend project - controllers.js
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */


MDapp.controller("mdPageController", function ($scope, $http) {
    $scope.currentMDPages   = [defaultPage];
    $scope.MDPages          = MDPages;
    $scope.markdown         = "";
    
    // Sets the current md-page content with "mdPagesArray". 
    // "mdPagesArray" is an array of pages entry, like specified 
    // in the config.js.
    function getPagesContentRecursive (pageContent, x, length) {
        if (x<length) {
            $http.get($scope.currentMDPages[x].url).success(function(data) { 
                $scope.markdown += data;
                getPagesContentRecursive(pageContent, x+1, length);
            });
        }
    };
    
    $scope.setCurrentMDPage = function(mdPagesArray) {
        $scope.currentMDPages = mdPagesArray;
        $scope.markdown = "";
        getPagesContentRecursive("", 0, $scope.currentMDPages.length);
    };
    
    $scope.setCurrentMDPage($scope.currentMDPages);
    
    // Checks if the current md-page index is the one passed as value
    $scope.isSet = function(mdPageUrl) {
        return ($scope.currentMDPage == mdPageUrl);
    };
    
});
