var TestPage = (function () {
    function TestPage() {
    }
    TestPage.prototype.open = function () {
        browser.get("http://localhost:3002/");
    };
    return TestPage;
})();
