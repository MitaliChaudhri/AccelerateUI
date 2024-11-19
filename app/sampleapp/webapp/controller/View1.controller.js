sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/core/Fragment"

],
function (Controller , Fragment) {
    "use strict";

    return Controller.extend("sampleapp.controller.View1", {
        onInit: function () {

        },
        togglePage: function(){
           
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2");
          
        },
        togglePage0 : function() {
           
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView3");
        },
        handleLinkPress: function () {
            var oView = this.getView();

            if (!this._pMyFragment) {
                this._pMyFragment = Fragment.load({
                    id: oView.getId(),
                    name: "sampleapp.view.MyFragment",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pMyFragment.then(function (oDialog) {
                oDialog.open();
            });
        },

        // Close the fragment dialog
        onCloseFragmentDialog: function () {
            if (this._pMyFragment) {
                this._pMyFragment.then(function (oDialog) {
                    oDialog.close();
                });
            }
        },

        // Handle button press inside the fragment
        onFragmentButtonPress: function () {
           
        }
    });
});
