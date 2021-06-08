sap.ui.define([
      "com/flexso/dev2dev/controller/BaseController",
      "sap/ui/core/Fragment",

  ], function (Controller, Fragment) {
      "use strict";

      return Controller.extend("com.flexso.dev2dev.controller.Detail", {

          onInit: function () {

              this.oRouter = this.getOwnerComponent().getRouter();

              this.oRouter
                  .getRoute("Ratings")
                  .attachPatternMatched(this._onItemMatched, this);
              this.oRouter
                  .getRoute("Beers")
                  .attachPatternMatched(this._onItemMatched, this);

          },

          _onItemMatched: function (oEvent) {
              this._beerId = oEvent.getParameter("arguments").beer;
              var sPath = "/Beers(" + this._beerId + ")";
              this.getView().bindElement({ path: sPath, parameters: { $expand: 'ratings' } });
          },

          handleClose: function () {
              this.oRouter.navTo("Beers");
          },

          onAddRating: function () {
              var oContext = this.getModel().bindList("/Ratings", null, null, null, { $$updateGroupId: 'ratings' }).create({
                  beer_id: parseInt(this._beerId)
              });
              if (!this._ratingDialog) {
                  Fragment.load({
                      type: "XML",
                      name: "com.flexso.dev2dev.view.AddRating",
                      controller: this,
                  }).then(
                      function (oDialog) {
                          this._ratingDialog = oDialog;
                          this.getView().addDependent(this._ratingDialog);
                          this._ratingDialog.setBindingContext(oContext);
                          this._ratingDialog.open();
                      }.bind(this)
                  );
              } else {
                  this._ratingDialog.setBindingContext(oContext);
                  this._ratingDialog.open();
              }
          },

          onSaveRating: function () {
              var oContext = this._ratingDialog.getBindingContext();
              this.getView().getModel().submitBatch("ratings");
              this._ratingDialog.close();
              this.getView().getModel().refresh();
          },

          onCloseDialog: function () {
              this._ratingDialog.getBindingContext().destroy();
              this._ratingDialog.close();
          }

      });
  });