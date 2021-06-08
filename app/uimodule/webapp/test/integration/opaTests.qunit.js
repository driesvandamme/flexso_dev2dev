/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/flexso/dev2dev/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
