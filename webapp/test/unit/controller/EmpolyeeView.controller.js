/*global QUnit*/

sap.ui.define([
	"sapktempolyeedata/empolyeedata/controller/EmpolyeeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmpolyeeView Controller");

	QUnit.test("I should test the EmpolyeeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
