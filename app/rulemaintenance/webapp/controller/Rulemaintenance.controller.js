sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
], (Controller,Dialog,Button,Text,MessageBox,Fragment) => {
    "use strict";

    return Controller.extend("rulemaintenance.controller.Rulemaintenance", {
      onInit() {

        const oModel = new sap.ui.model.json.JSONModel({
            payload: {
               PreDefineApp :[{
                    id : "1",
                    text : "Manager"
               },
               {
                    id : "2",
                    text : "Business Owner"
                },
                {
                    id : "3",
                    text : "Role Owner"
                }],
                CustomApp : [{
                    id : "1",
                    text: "Directly Mapped"
                },
                {
                    id : "2",
                    text: "Custom Group"
                }],
                WorkFlow:[{
                    id:"1",
                    text:"CREATE_USER"
                },
                {
                    id:"2",
                    text:"CHANGE_USER"
                },
                {
                    id:"3",
                    text:"DELETE_USER"
                },
                {
                    id:"4",
                    text:"UNLOCK_USER"
                },
                {
                    id:"5",
                    text:"DELEGATE_USER"
                }],
                Connector:[{
                    id:"1",
                    text:"TGDCLNT210"

                },
                {
                    id:"2",
                    text:"TGDCLNT300"

                },
                {
                    id:"3",
                    text:"TGDCLNT100"

                },
                {
                    id:"4",
                    text:"TSD4LNT100"

                }],
                Path:[{
                    id:"1",
                    text:"business_path"

                },
                {
                    id:"2",
                    text:"Change_user"

                },
                {
                    id:"3",
                    text:"Create_user"

                },
                {
                    id:"4",
                    text:"Delegate_user"

                }],
                EscalationType:[{
                    id:"1",
                    text:"Auto Approve Move To Next Step"

                },
                {
                    id:"2",
                    text:"Cancel Request"

                },
                {
                    id:"3",
                    text:"Request Admin"

                }],
                RouteRequest:[{
                    id:"1",
                    text:"All Risks"

                },
                {
                    id:"2",
                    text:"Only Critical/High Risk"

                },
                {
                    id:"3",
                    text:"Training Verification"

                },
                {
                    id:"4",
                    text:"Training Verification + Risks"

                },
                {
                    id:"5",
                    text:"Training Verification + High Risks"

                }]
                
            },
            groups : [{
              "escalation": false,
              "additionalchecks":false
          }],
                customgroup: 0,
                bapprovaltyep:true,
                bappdirect:false,
                child1 : false,
                child2 : false,
                approvers: [],      // Empty by default
                showApprovers: false, // Initially hidden
             
                  bRecurring:false,
                  bOneTime:true,
                  bStartImmed:false,
                  bTraining: false
       
                 
                 
        });
      
        this.getView().setModel(oModel, "oModel");
    },
        onPressGenerateRule: function () {
            MessageBox.confirm("Are you sure you want to generate the rule?",{
                onClose: function (ok) {
                  if (ok === 'OK') {
                    sap.m.MessageBox.success("Rule has been generated succesfully");
                  }
                }.bind(this),
              });
        }, OnPressDeactivate: function () {
            MessageBox.confirm("Are you sure you want to De-Activate?",{
                onClose: function (ok) {
                  if (ok === 'OK') {
                    sap.m.MessageBox.success("De-activated succesfully");
                  }
                }.bind(this),
              });
        },

        OnPressAddRiskMaintenance: function () {
        
        if (!this.__oMPDialog) {
            this.__oMPDialog = sap.ui.xmlfragment("rulemaintenance.fragments.AddRiskMaintenance", this);
          }
          this.getView().addDependent(this.__oMPDialog);
          this.__oMPDialog.open();
        },     
        

        OnPressAddTGMaintenance: function () {
        
        if (!this.__oTGMainDialog) {
        

            this.__oTGMainDialog = sap.ui.xmlfragment("rulemaintenance.fragments.AddTGMaintenance", this);
          }
          this.getView().addDependent(this.__oTGMainDialog);
          this.__oTGMainDialog.open();
     
        },
        OnSaveRiskMaintenance: function () {
            sap.m.MessageBox.success("Risk Maintenance has been created succesfully.");
            this.__oMPDialog.close();
        },
        OnCloseRiskMaintenance: function () {
            
            this.__oMPDialog.close();
        },

        OnPressViewRule: function () {
        
            if (!this.__oViewRuleDialog) {
            
             
                this.__oViewRuleDialog = sap.ui.xmlfragment("rulemaintenance.fragments.ViewRule", this);
              }
              this.getView().addDependent(this.__oViewRuleDialog);
            //   this.getView().getModel("localModel").setProperty("/CorrectAction", {});
              this.__oViewRuleDialog.open();
            },
            OnCloseViewRule: function () {
               
                this.__oViewRuleDialog.close();
            },
            OndeleteRisk: function () {
                MessageBox.confirm("Are you sure you want to Delete the risk?",{
                    onClose: function (ok) {
                      if (ok === 'OK') {
                        sap.m.MessageBox.success("Risk has been deleted succesfully");
                      }
                    }.bind(this),
                  });
            }, 
            OnSaveTGMaintenance: function () {
                sap.m.MessageBox.success("TG Maintenance has been added succesfully.");
                this.__oTGMainDialog.close();
            },
            OnSaveTGMapping: function () {
              sap.m.MessageBox.success("TG Mapping has been added succesfully.");
              this.OnCloseCreateTGMapping.close();
          },
            OnCloseTGMaintenance: function () {
                
                this.__oTGMainDialog.close();
            },
            OnPressTGMapping: function () {
        
                if (!this.__oTGMappingDialog) {
                
                 
                    this.__oTGMappingDialog = sap.ui.xmlfragment("rulemaintenance.fragments.ViewTGMapping", this);
                  }
                  this.getView().addDependent(this.__oTGMappingDialog);
                //   this.getView().getModel("localModel").setProperty("/CorrectAction", {});
                  this.__oTGMappingDialog.open();
                },
                OnPressCreateTGMapping: function () {
        
                  if (!this.__oCreateTGMappingDialog) {
                  
                   
                      this.__oCreateTGMappingDialog = sap.ui.xmlfragment("rulemaintenance.fragments.CreateTGMapping", this);
                    }
                    this.getView().addDependent(this.__oCreateTGMappingDialog);
                  //   this.getView().getModel("localModel").setProperty("/CorrectAction", {});
                    this.__oCreateTGMappingDialog.open();
                  },
                  OnCloseCreateTGMapping: function () {
                
                    this.__oCreateTGMappingDialog.close();
                },
                OnCloseViewTGMapping: function () {
                
                  this.__oTGMappingDialog.close();
              },    OnpressDeactivateTGMapping: function () {
                MessageBox.confirm("Are you sure you want to Deactivate?",{
                    onClose: function (ok) {
                      if (ok === 'OK') {
                        sap.m.MessageBox.success("Succesfully Done.");
                      }
                    }.bind(this),
                  });
            },    OnpressDeleteTGMappig: function () {
              MessageBox.confirm("Are you sure you want to Delete?",{
                  onClose: function (ok) {
                    if (ok === 'OK') {
                      sap.m.MessageBox.success("Succesfully Done.");
                    }
                  }.bind(this),
                });
          },  OndeleteTGMaintenance: function () {
            MessageBox.confirm("Are you sure you want to Delete the TG Maintenance?",{
                onClose: function (ok) {
                  if (ok === 'OK') {
                    sap.m.MessageBox.success("Deleted succesfully");
                  }
                }.bind(this),
              });
        }, 
        OnPressDeleteSubBusinessProcess: function () {
          MessageBox.confirm("Are you sure you want to Delete Business Sub Process?",{
              onClose: function (ok) {
                if (ok === 'OK') {
                  sap.m.MessageBox.success("Business Sub Process has been Deleted succesfully.");
                }
              }.bind(this),
            });
      }, 
        OnAddBusinessProcess: function () {
        
          if (!this.__oAddBusinessProcessgDialog) {
          
           
              this.__oAddBusinessProcessgDialog = sap.ui.xmlfragment("rulemaintenance.fragments.AddBusinessProcess", this);
            }
            this.getView().addDependent(this.__oAddBusinessProcessgDialog);
          //   this.getView().getModel("localModel").setProperty("/CorrectAction", {});
            this.__oAddBusinessProcessgDialog.open();
          }, OnSaveBusinessProcess: function () {
            sap.m.MessageBox.success("Business Process has been added succesfully.");
            this.__oAddBusinessProcessgDialog.close();
        },
        OnCloseBusinessProcess: function () {
              
              this.__oAddBusinessProcessgDialog.close();
          }, OnPressDeleteBusinessProcess: function () {
            MessageBox.confirm("Are you sure you want to Delete the Business Process?",{
                onClose: function (ok) {
                  if (ok === 'OK') {
                    sap.m.MessageBox.success("Business Process Deleted succesfully");
                  }
                }.bind(this),
              });
        },   OnAddSubBusinessProcess: function () {
        
          if (!this.__oAddBusinessSubProcessgDialog) {
          
           
              this.__oAddBusinessSubProcessgDialog = sap.ui.xmlfragment("rulemaintenance.fragments.AddBusinessSubProcess", this);
            }
            this.getView().addDependent(this.__oAddBusinessSubProcessgDialog);
          //   this.getView().getModel("localModel").setProperty("/CorrectAction", {});
            this.__oAddBusinessSubProcessgDialog.open();
          },
          OnCloseBusinessSubProcess: function () {
             
              this.__oAddBusinessSubProcessgDialog.close();
          },
          OnSaveBusinessSubProcess: function () {
            sap.m.MessageBox.success("Business Sub Process has been added succesfully.");
            this.__oAddBusinessSubProcessgDialog.close();
        }, OnAddBusinessProcessRole: function () {
        
          if (!this.__oAddBusinessProcessRolegDialog) {
          
           
              this.__oAddBusinessProcessRolegDialog = sap.ui.xmlfragment("rulemaintenance.fragments.AddBusinessProcessRole", this);
            }
            this.getView().addDependent(this.__oAddBusinessProcessRolegDialog);
          
            this.__oAddBusinessProcessRolegDialog.open();
          }, OnSaveBusinessProcessRole: function () {
            sap.m.MessageBox.success("Business Process Role has been added succesfully.");
            this.__oAddBusinessProcessRolegDialog.close();
        },
        OnCloseBusinessProcessRole: function () {
              
              this.__oAddBusinessProcessRolegDialog.close();
          },
          onPressGoToMaster: function () {
            this.getSplitAppObj().toMaster(this.createId("master2"));
          },
          getSplitAppObj: function () {
            var result = this.byId("SplitAppDemo");
            if (!result) {
              Log.info("SplitApp object can't be found");
            }
            return result;
          },
          onListItemPress: function (oEvent) {
            var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
      
            this.getSplitAppObj().toDetail(this.createId(sToPageId));
          },onAprroveAdd : function(){
            const that = this;
            if (!that.__oAPDialog) {

                that.__oAPDialog = sap.ui.xmlfragment("rulemaintenance.fragments.ApproverOpen", that);

            }
            that.getView().addDependent(that.__oAPDialog);
            //oModel.refresh();

            that.__oAPDialog.open();
        },
        onCancelApprovalFragment: function () {
            const that = this;
            this.__oAPDialog.close();
         },
         onMappingAdd:function(){
            const that = this;
            if (!that.__oMPDialog) {

                that.__oMPDialog = sap.ui.xmlfragment("rulemaintenance.fragments.MappingsOpen", that);

            }
            that.getView().addDependent(that.__oMPDialog);
            //oModel.refresh();

            that.__oMPDialog.open();
         },
         onCancelMappingsFragment:function(){
            const that = this;
            this.__oMPDialog.close();
         },
         onAddPaths:function(){
            const that = this;
            if (!that.__oPATHDialog) {

                that.__oPATHDialog = sap.ui.xmlfragment("rulemaintenance.fragments.PathsOpen", that);

            }
            that.getView().addDependent(that.__oPATHDialog);
            that.getView().getModel("oModel").setProperty("/groups", []);
            //oModel.refresh();

            that.__oPATHDialog.open();
         },
         onAddGroups: function () {
            const oModel = this.getView().getModel("oModel");
            const groups = oModel.getProperty("/groups");

            groups.push({
                "child1" : false,
                "child2":""
            });
            oModel.setProperty("/groups", groups);
        },
        onCheckboxSelectEsc: function (oEvent){
            const oModel = this.getView().getModel("oModel");
            const index = oEvent
                    .getSource()
                    .getBindingContext("oModel")
                    .getPath().split("/")[2];

               
            const groups = oModel.getProperty("/groups");

            groups.forEach((group,index) => {
                const sRowPath = `/groups/${index}`;
                
                if(sRowPath === index){
                    oModel.setProperty(`${sRowPath}/child1`, index === true);
                }else{
                    oModel.setProperty(`${sRowPath}/child1`, index === false);

                }
               
                // if (sRowPath === index) {
                //     this.getView().getModel("oModel").oData.child1 = true; // Select the current row
                // } else {
                //     this.getView().getModel("oModel").oData.child1 = false; // Deselect all other rows
                // }
            });
    
           // groups.splice(index, 1);
            //oModel.setProperty("/groups", groups);
        },
        onCancelPathsFragment:function(){
            const that = this;
            this.__oPATHDialog.close();
        },
        onDeleteGroups :function(oEvent){
            const index = oEvent
                    .getSource()
                    .getBindingContext("oModel")
                    .getPath()
                    .slice(-1);

                const oModel = this.getView().getModel("oModel");
                const groups = oModel.getProperty("/groups");

                groups.splice(index, 1);
                oModel.setProperty("/groups", groups);
        },
        onApproverTypeChange : function(oEvent){
            const selectedKey = oEvent.getSource().getSelectedKey();
            const oModel = this.getView().getModel("oModel");

            if (selectedKey === "1") { // Directly Mapped
                // Update approvers list
                oModel.setProperty("/approvers", [
                    { id: "101", name: "Approver 1" },
                    { id: "102", name: "Approver 2" }
                ]);
                oModel.setProperty("/showApprovers", true);
            } else {
                // Hide approvers dropdown
                oModel.setProperty("/approvers", []);
                oModel.setProperty("/showApprovers", false);
            }
        },
        onAddConnector:function(){
          var oView = this.getView();
          if (!this._oDialog) {
            Fragment.load({
              name: "rulemaintenance.fragments.Connector",
              controller: this
            }).then(function (oDialog) {
              this._oDialog = oDialog;
              oView.addDependent(this._oDialog);
              this._oDialog.open();
            }.bind(this));
          } else {
            this._oDialog.open();
          }

      },
      onCancelConn:function(){
          this._oDialog.close();
      },
     
      onSchedule:function(oEvent){
        var oView = this.getView();
        if (!this._oDialogSchedule) {
          Fragment.load({
            name: "rulemaintenance.fragments.Schedule",
            controller: this
          }).then(function (_oDialogSchedule) {
            this._oDialogSchedule = _oDialogSchedule;
            oView.addDependent(this._oDialogSchedule);
            this._oDialogSchedule.open();
          }.bind(this));
        } else {
          this._oDialogSchedule.open();
        }


        //   var oButton = oEvent.getSource(),
        //   oView = this.getView();
        // if (!this._pDialog) {
        //   this._pDialog = Fragment.load({
        //     id: oView.getId(),
        //     name: "syncdata.fragments.Schedule",
        //     controller: this,
        //   }).then(function (oDialog) {
        //     oDialog.setModel(oView.getModel());
        //     return oDialog;
        //   });
         
        // }

        // this._pDialog.then(function (oDialog) {
        //   oDialog.open();
        // });
        // oView.byId("recurringId").setVisible(false);
        // oView.byId("recurringId1").setVisible(false);
        
      },

      onCancelPress:function(){
        this._oDialogSchedule.close();
      },

      onSelectRecurring:function(oEvent){
        if(oEvent.getSource().getSelectedIndex() == 0 && sap.ui.getCore().byId("startimm").getSelected() == false){
          this.getView().getModel("oModel").setProperty("/bOneTime", true);
          this.getView().getModel("oModel").setProperty("/bRecurring", false);
          this.getView().getModel("oModel").setProperty("/bStartImmed", false);
        }
        else if(oEvent.getSource().getSelectedIndex() == 1 && sap.ui.getCore().byId("startimm").getSelected() == false){
          this.getView().getModel("oModel").setProperty("/bOneTime", false);
          this.getView().getModel("oModel").setProperty("/bRecurring", true);
          this.getView().getModel("oModel").setProperty("/bStartImmed", false);
        }
        else if(oEvent.getSource().getSelectedIndex() == 0 && sap.ui.getCore().byId("startimm").getSelected() == true){
          this.getView().getModel("oModel").setProperty("/bOneTime", false);
          this.getView().getModel("oModel").setProperty("/bRecurring", false);
          this.getView().getModel("oModel").setProperty("/bStartImmed", false);
        }
        else if(oEvent.getSource().getSelectedIndex() == 1 && sap.ui.getCore().byId("startimm").getSelected() == true){
          this.getView().getModel("oModel").setProperty("/bStartImmed", true);
          this.getView().getModel("oModel").setProperty("/bOneTime", false);
          this.getView().getModel("oModel").setProperty("/bRecurring", false);
        }
       

      },

      onSelectStart:function(oEvent){
if(oEvent.getSource().getSelected() == true && sap.ui.getCore().byId("radiobtn").getSelectedIndex() == 0){
this.getView().getModel("oModel").setProperty("/bOneTime", false);
this.getView().getModel("oModel").setProperty("/bRecurring", false);
this.getView().getModel("oModel").setProperty("/bStartImmed", false);
}
else{
this.getView().getModel("oModel").setProperty("/bStartImmed", true);
this.getView().getModel("oModel").setProperty("/bOneTime", false);
this.getView().getModel("oModel").setProperty("/bRecurring", false);
}
      },

      onViewSync:function(oEvent){
        var oView = this.getView();
        if (!this._oDialogSyn) {
          Fragment.load({
            name: "rulemaintenance.fragments.ViewSyncJob",
            controller: this
          }).then(function (oDialog) {
            this._oDialogSyn = oDialog;
            oView.addDependent(this._oDialogSyn);
            this._oDialogSyn.open();
          }.bind(this));
        } else {
          this._oDialogSyn.open();
        }
      },

      onCancelView:function(){
        this._oDialogSyn.close();
      },
      
      onAddMaintainRole: function () {
        var oView = this.getView();
        if (!this._oDialog) {
            Fragment.load({
                name: "rulemaintenance.fragments.AddRolesConfig",
                controller: this
            }).then(function (oDialog) {
                this._oDialogMainRole = oDialog;
                oView.addDependent(this._oDialogMainRole);
                this._oDialogMainRole.open();
            }.bind(this));
        } else {
            this._oDialogMainRole.open();
        }
    },
    onCancelRole:function(){
      this._oDialogMainRole.close();
  },
    onViewImport: function () {
        var oView = this.getView();
        if (!this._oDialogImp) {
            Fragment.load({
                name: "rulemaintenance.fragments.ViewImports",
                controller: this
            }).then(function (oDialog) {
                this._oDialogImp = oDialog;
                oView.addDependent(this._oDialogImp);
                this._oDialogImp.open();
            }.bind(this));
        } else {
            this._oDialogImp.open();
        }
    },

    onCancelRole:function(){
        this._oDialogMainRole.close();
    },

    onImport:function(oEvent){

    },

    onSelectEnable: function (oEvent) {
        if (oEvent.getSource().getSelected() == true) {
            this.getView().getModel().setProperty("/bTraining", true);
        }
        else {
            this.getView().getModel().setProperty("/bTraining", false);
        }
    },

    onCancelConn: function () {
        this._oDialog.close();
    },
    onAdd:function(oEvent){
      var oView = this.getView();
      if (!this._oDialog) {
        Fragment.load({
          name: "rulemaintenance.fragments.AddTrain",
          controller: this
        }).then(function (oDialog) {
          this._oDialog = oDialog;
          oView.addDependent(this._oDialog);
          this._oDialog.open();
        }.bind(this));
      } else {
        this._oDialog.open();
      }
  },

  onCancelTrain:function(){
      this._oDialog.close();
  },

    });
});

