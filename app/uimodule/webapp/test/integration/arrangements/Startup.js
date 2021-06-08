sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.flexso.dev2dev.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.flexso.dev2dev",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
