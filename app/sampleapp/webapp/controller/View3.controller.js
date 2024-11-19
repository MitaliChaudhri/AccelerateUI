sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
          "sap/ui/core/Fragment"
    ],
    function(BaseController, Fragment) {
      "use strict";
  
      return BaseController.extend("sampleapp.controller.View3", {
        onInit: function() {

      
        },
        
        togglePageback: function(){
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1");
          var oVBox = this.getView().byId("dataview2");
          oVBox.setVisible(false);
        },
        onSubmitPress: function() {
          var oVBox = this.getView().byId("dataview2");
          oVBox.setVisible(true);
      },
      onAddRolesPress: function() {
        var oView = this.getView();
        
     
        if (!this._pAddRolesDialog) {
          
            this._pAddRolesDialog = Fragment.load({
                id: oView.getId(), // Ensure unique ID
                name: "sampleapp.view.Role", // Path to the fragment
                controller: this // Associate controller
            }).then(function(oDialog) {
                oView.addDependent(oDialog);
                return oDialog;
            });
        }

        // Open the dialog
        this._pAddRolesDialog.then(function(oDialog) {
            oDialog.open();
        });
    },
    
    onAddRole: function() {
        this.byId("addRolesDialog").close();
    },

    onCancelDialog: function() {
        // Close the dialog
        this.byId("addRolesDialog").close();
    },
    onAnalyzeRiskPress: function() {
        var oView = this.getView();
        
       
        if (!this._pAnalyzeRiskDialog) {
          
            this._pAnalyzeRiskDialog = Fragment.load({
                id: oView.getId(), // Ensure unique ID
                name: "sampleapp.view.AnalyzeRiskTable", // Path to the fragment
                controller: this // Associate controller
            }).then(function(oDialog) {
                oView.addDependent(oDialog);
                return oDialog;
            });
        }

        // Open the dialog
        this._pAnalyzeRiskDialog.then(function(oDialog) {
            oDialog.open();
        });
    },
    
    onCloseRiskDialog: function() {
        // Close the dialog
        this.byId("analyzeRiskDialog").close();
    }
      });
    }
  );
  