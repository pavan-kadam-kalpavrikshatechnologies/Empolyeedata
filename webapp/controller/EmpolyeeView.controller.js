sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.empolyeedata.empolyeedata.controller.EmpolyeeView", {
            onInit: function () {
                var countries = [{
                    "name": "India",
                    "code": "IN"
                  },
                  {
                    "name": "Russia",
                    "code": "RU"
                  },
                  {
                    "name": "China",
                    "code": "CH"
                  },
                  {
                    "name": "American",
                    "code": "AS"
                  },
                  {
                    "name": "Japan",
                    "code": "JA"
                  }];
                var oModelCountry = new sap.ui.model.json.JSONModel(countries);
                this.getView().setModel(oModelCountry, "country");

                var states = [
                    {
                        "country": "IN", 
                        "key": "AN",
                        "name": "Andaman and Nicobar Islands"
                    },
                    {
                        "country": "IN", 
                        "key": "AP",
                        "name": "Andhra Pradesh"
                    },
                    {
                        "country": "IN", 
                        "key": "AR",
                        "name": "Arunachal Pradesh"
                    },
                    {
                        "country": "IN", 
                        "key": "AS",
                        "name": "Assam"
                    },
                    {
                        "country": "IN", 
                        "key": "BI",
                        "name": "Bihar"
                    },
                    {
                        "country": "RU", 
                        "key": "MSK",
                        "name": "Moscow"
                    },
                    {
                        "country": "RU", 
                        "key": "SPB",
                        "name": "Saint Petersburg"
                    },
                    {
                        "country": "RU", 
                        "key": "NSB",
                        "name": "Novosibirsk"
                    },
                    {
                        "country": "RU", 
                        "key": "EK",
                        "name": "Yekaterinburg"
                    },
                    {
                        "country": "RU", 
                        "key": "KC",
                        "name": "Kazan"
                    },
                    {
                        "country": "CH", 
                        "key": "BJ",
                        "name": "Beijing"
                    },
                    {
                        "country": "CH", 
                        "key": "SH",
                        "name": "Shanghai"
                    },
                    {
                        "country": "CH", 
                        "key": "GZ",
                        "name": "Guangzhou"
                    },
                    {
                        "country": "CH", 
                        "key": "SZ",
                        "name": "Shenzhen"
                    },
                    {
                        "country": "CH", 
                        "key": "CD",
                        "name": "Chengdu"
                    },
                    {
                        "country": "AS", 
                        "key": "NY",
                        "name": "New York"
                    },
                    {
                        "country": "AS", 
                        "key": "LA",
                        "name": "Los Angeles"
                    },
                    {
                        "country": "AS", 
                        "key": "CHI",
                        "name": "Chicago"
                    },
                    {
                        "country": "AS", 
                        "key": "HOU",
                        "name": "Houston"
                    },
                    {
                        "country": "AS", 
                        "key": "PHI",
                        "name": "Philadelphia"
                    },
                    {
                        "country": "JA", 
                        "key": "TK",
                        "name": "Tokyo"
                    },
                    {
                        "country": "JA", 
                        "key": "OS",
                        "name": "Osaka"
                    },
                    {
                        "country": "JA", 
                        "key": "NG",
                        "name": "Nagoya"
                    },
                    {
                        "country": "JA", 
                        "key": "SK",
                        "name": "Sapporo"
                    },
                    {
                        "country": "JA", 
                        "key": "KY",
                        "name": "Kyoto"
                    }
                ];
                
                var oModelState = new sap.ui.model.json.JSONModel(states);
                this.getView().setModel(oModelState, "state");

                var studentdata = [{
                    "sr": 1,
                    "collagename": "New English School Mahimangad",
                    "year": 2018,
                    "degree": "10th",
                    "markes": "66%"
                },
                {
                    "sr": 2,
                    "collagename": "New English School Mahimangad",
                    "year": 2020,
                    "degree": "12th",
                    "markes": "53%"
                }, {
                    "sr": 3,
                    "collagename": "Dahiwadi Collage Dahiwadi",
                    "year": 2023,
                    "degree": "BCA",
                    "markes": "70%"
                }
                ]
                var oModel2 = new sap.ui.model.json.JSONModel(studentdata)
                //var oColItem = this.getView().byId("colmunListId")
                this.getView().setModel(oModel2, "studentdata");
                // this.getView().byId("TableId").bindAggregation("items","/",oColItem)

                var jsondata2 = [{
                    "sr":"",
                    "collagename": "",
                    "year":"",
                    "degree": "",
                    "markes": "",
                    "valueStatesr": "None",
                    "ValueStateTextsr": "",
                    "valueStatecollagename": "None",
                    "ValueStateTextcollagename": "",
                    "valueStateyear": "None",
                    "ValueStateTextyear": "",
                    "valueStatedegree": "None",
                    "ValueStateTextdegree": "",
                    "valueStatemarkes": "None",
                    "ValueStateTextmarkes": "",

                }]
                var oModel2 = new sap.ui.model.json.JSONModel(jsondata2)
                this.getView().setModel(oModel2,'studentdata2')
            },
            onPressBtn1: function () {
                var oView = this.getView();
                if (!this.oDialog) {
                    this.oDialog = sap.ui.core.Fragment.load({
                        name: "sap.kt.empolyeedata.empolyeedata.fragment.employee",
                        // sap.kt.empolyeedata.empolyeedata.controller.EmpolyeeView
                        controller: this
                    }).then(function (oDialog) {
                        this.oDialog = oDialog;
                        oView.addDependent(this.oDialog);
                        this.oDialog.open();
                    }.bind(this));
                } else {
                    this.oDialog.open();
                }
            },
            onDelete: function (oEvent) {
                var sSelectedPath = oEvent.getParameter("listItem").getBindingContextPath().split("/")[1];
                this.getView().getModel("studentdata").getData().splice(sSelectedPath, "1");
                this.byId("TableId").getModel("studentdata").refresh();
            },
            // onPressSave: function () {

            //     //var oModel = this.getView().getModel("studentdata").getData();
            //     var oValidModel = this.getView().getModel("studentdata2");
            //     var sr = oValidModel.getProperty("/sr");
            //     var collagename = oValidModel.getProperty("/collagename");
            //     var year = oValidModel.getProperty("/year");
            //     var degree = oValidModel.getProperty("/degree");
            //     var markes = oValidModel.getProperty("/markes");

            //     if(!sr) {
            //         oValidModel.setProperty("/valueStatesr","Error");
            //         oValidModel.setProperty("/ValueStateTextsr","Enter the Value");
            //         }
            //     if(!collagename) {
            //         oValidModel.setProperty("/valueStatecollagename","Error");
            //         oValidModel.setProperty("/ValueStateTextcollagename","Enter the Value");
            //         }
            //     if(!year) {
            //         oValidModel.setProperty("/valueStateyear","Error");
            //         oValidModel.setProperty("/ValueStateTextyear","Enter the Value");
            //         }
            //     if(!degree) {
            //         oValidModel.setProperty("/valueStatedegree","Error");
            //         oValidModel.setProperty("/ValueStateTextdegree","Enter the Value");
            //         }
            //     if(!markes) {
            //         oValidModel.setProperty("/valueStatemarkes","Error");
            //         oValidModel.setProperty("/ValueStateTextmarkes","Enter the Value");
            //         }else{
            //             for(let i=0;i<=markes.length-1;i++){
            //                 if(markes[i]!=='%'){
            //                     oValidModel.setProperty("/valueStateyear","Error");
            //                     oValidModel.setProperty("/ValueStateTextyear","Use only %");
            //                 }else{
            //                     oValidModel.setProperty("/valueStateyear","None");
            //                 }
            //             }
            //         }

            //     // var sSrId = sap.ui.getCore().byId("idSr").getValue();
            //     // var sCollageId = sap.ui.getCore().byId("idCollage").getValue();
            //     // var sYearId = sap.ui.getCore().byId("idYear").getValue();
            //     // var sDegreeId = sap.ui.getCore().byId("idDegree").getValue();
            //     // var sMarkId = sap.ui.getCore().byId("idMark").getValue();
            //     var oModel = this.getView().getModel("studentdata").getData();
            //     var oPayload = {
            //         "sr": sSrId,
            //         "collagename": sCollageId,
            //         "year": sYearId,
            //         "degree": sDegreeId,
            //         "markes": sMarkId
            //     }
            //     oModel.push(oPayload);
            //     this.oDialog.close();
            //     this.byId("TableId").getModel("studentdata").refresh();
            //     // MessageBox.success("Expense Saved Successfully")
            // },

            onPressSave: function() {
                var oModel = this.getView().getModel("studentdata").getData();
                var oValidModel = this.getView().getModel("studentdata2");
                var sr = oValidModel.getProperty("/sr");
                var collagename = oValidModel.getProperty("/collagename");
                var year = oValidModel.getProperty("/year");
                var degree = oValidModel.getProperty("/degree");
                var markes = oValidModel.getProperty("/markes");
            
            //    if(sr || collagename || year || degree || marks){
                if(!sr){
                    oValidModel.setProperty("/valueStatesr","Error");
                    oValidModel.setProperty("/ValueStateTextsr","Enter The Value");
                    return;
                }else{
                    oValidModel.setProperty("/valueStatesr","None");
                }
                if(!collagename){
                    oValidModel.setProperty("/valueStatecollagename","Error");
                    oValidModel.setProperty("/ValueStateTextcollagename","Enter The Value");
                    return;
                }else{
                    oValidModel.setProperty("/valueStatecollagename","None");
                }
                if(!year){
                    oValidModel.setProperty("/valueStateyear","Error");
                    oValidModel.setProperty("/ValueStateTextyear","Enter The Value");
                    return;
                }else{
                    if(year.length==4){
                        oValidModel.setProperty("/valueStateyear","None");
                    }else{
                        oValidModel.setProperty("/valueStateyear","Error");
                        oValidModel.setProperty("/ValueStateTextyear","Enter 4 char in this year");
                        return;
                    }
                }
                if(!degree){
                    oValidModel.setProperty("/valueStatedegree","Error");
                    oValidModel.setProperty("/ValueStateTextdegree","Enter The Value");
                    return;
                }else{
                    oValidModel.setProperty("/valueStatedegree","None");
                }
                if(!markes){
                    oValidModel.setProperty("/valueStatemarkes","Error");
                    oValidModel.setProperty("/ValueStateTextmarkes","Enter The Value");
                    return;
                }else{
                    let number = /^\d+(\.\d{1,2})?%$/;
                    if(number.test(markes)){
                        oValidModel.setProperty("/valueStatemarks","None");
                    }else{
                        oValidModel.setProperty("/valueStatemarks","Error");
                        oValidModel.setProperty("/ValueStateTextmarks","Should dot and last % sing");
            
                    }
                }

            //    }else{
                   var oPayload = {
                       "sr": sr,
                       "collagename": collagename,
                       "year": year,
                       "degree": degree,
                       "markes": markes
                    };
                    
                    oModel.push(oPayload);
                    this.oDialog.close();
                    this.byId("TableId").getModel("studentdata").refresh();
                // }
            }
            ,                          
            onPressClose: function () {
                this.oDialog.close()

            }, onChange: function () {
                var data = this.byId("date1").getValue()
                var date2 = data.split("-")[0]
                var date1 = new Date()
                var year1 = date1.getFullYear()
                var cal = year1 - date2
                console.log(cal);
                if (cal > 21) {
                    this.byId("age").setValueState("None");
                    this.byId("age").setValue(cal)
                } else {
                    this.byId("age").setValueState("Error")
                    this.byId("age").setValueStateText("Enter the value");
                }
            },
            onPressBtn: function () {
                // var a = this.byId("fname").getValue()
                // var b = this.byId("lname").getValue()
                // var c = this.byId("date1").getValue()
                // var d = this.byId("age").getValue()
                // var e = this.byId("address").getValue()

                // if (a === "") {
                //     this.byId("fname").setValueState("Error")
                //     this.byId("fname").setValueStateText("Enter the value");
                // } else {
                //     this.byId("fname").setValueState("None");
                // }
                
                var a = this.getView().byId("fname").getValue();
                var b = this.getView().byId("lname").getValue();
                var c = this.getView().byId("date1").getValue();
                var d = this.getView().byId("age").getValue();
                var e = this.getView().byId("address").getValue();
               
                var h = this.getView().byId("city").getValue();
                var i = this.getView().byId("pin").getValue();
                var j = this.getView().byId("email").getValue();
                var k = this.getView().byId("contact").getValue();
                var flag = true
                if(!a){
                    this.getView().byId("fname").setValueState("Error");
                    this.getView().byId("fname").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("fname").setValueState("None");
                }
                if(!b){
                    this.getView().byId("lname").setValueState("Error");
                    this.getView().byId("lname").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("lname").setValueState("None");
                }
                if(!c){
                    this.getView().byId("date1").setValueState("Error");
                    this.getView().byId("date1").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("date1").setValueState("None");
                }
                if(!d){
                    this.getView().byId("age").setValueState("Error");
                    this.getView().byId("age").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("age").setValueState("None");
                }
                if(!e){
                    this.getView().byId("address").setValueState("Error");
                    this.getView().byId("address").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("address").setValueState("None");
                }
                if(!h){
                    this.getView().byId("city").setValueState("Error");
                    this.getView().byId("city").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("city").setValueState("None");
                }
                if (!i) {
                    this.getView().byId("pin").setValueState("Error");
                    this.getView().byId("pin").setValueStateText("Enter a value");
                    flag = false
                } else {
                    if (i.length == 6) {
                        this.getView().byId("pin").setValueState("None");
                    } else {
                        this.getView().byId("pin").setValueState("Error");
                        this.getView().byId("pin").setValueStateText("Only 6 characters are allowed");
                    }
                }
                
                if(!j){
                    this.getView().byId("email").setValueState("Error");
                    this.getView().byId("email").setValueStateText("Enter the Value");
                    flag = false
                }else{
                    this.getView().byId("email").setValueState("None");
                }
                if (!k) {
                    this.getView().byId("contact").setValueState("Error");
                    this.getView().byId("contact").setValueStateText("Enter the Value");
                    flag = false
                } else {
                   let number = /^\+\d{12}$/
                   if(number.test(k)){
                    this.getView().byId("contact").setValueState("None");
                   }else{
                    this.getView().byId("contact").setValueState("Error");
                    this.getView().byId("contact").setValueStateText("Only digits or a plus sign are allowed, and the plus sign must be at the beginning.");
                   }
                }   
                if(flag==false){
                    sap.m.MessageBox.error("Mandatory validation failed")
                }                                   
                
            },
            onChange2 : function(oEvent){
                var selectedCountry = oEvent.getParameter("selectedItem").getKey()

                var oValue = new sap.ui.model.Filter("country", sap.ui.model.FilterOperator.EQ,selectedCountry);
                this.getView().byId("model").getBinding("items").filter(oValue)
            }
            // onLiveChange : function(oEvent){
            //     if(oEvent.getSource().getValue()){
            //         oEvent.getSource().setValueState("None")
            //     }else{
            //         oEvent.getSource().setValueState("Error");
            //         oEvent.getSource().setValueStateText("Enter the Value")
            //     }
            // }
        });
    })


