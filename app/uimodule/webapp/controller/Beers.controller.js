  sap.ui.define([
  "com/flexso/dev2dev/controller/BaseController"
  ], function (Controller) {
      "use strict";

      return Controller.extend("com.flexso.dev2dev.controller.Beers", {

          onListItemPress: function (oEvent) {
              var beer = oEvent.getSource().getBindingContext().getObject();
              var oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("Ratings", {
                  beer: beer.id
              });

          }

      });
  });