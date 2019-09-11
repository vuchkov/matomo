/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
(function () {
    angular.module('piwikApp.service').service('piwikUrl', piwikUrl);

    piwikUrl.$inject = ['$location', 'piwik'];

    /**
     * Similar to angulars $location but works around some limitation. Use it if you need to access search params
     */
    function piwikUrl($location, piwik) {

        var model = {
            getSearchParam: getSearchParam
        };

        return model;

        function getSearchParam(paramName)
        {
            var hash = window.location.href.split('#');
            if (hash && hash[1] && (new RegExp(paramName + '(\\[]|=)')).test(decodeURIComponent(hash[1]))) {
                return piwik.broadcast.getValueFromHash(paramName);
            }
            return broadcast.getValueFromUrl(paramName);
        }
    }
})();
