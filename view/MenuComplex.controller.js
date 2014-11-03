jQuery.sap.require("sap.ui.model.json.JSONModel");

sap.ui.controller("ui5bp.view.MenuComplex", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/menu_complex.json"));
        this.bus = sap.ui.getCore().getEventBus();
    },

    doNavOnSelect: function(event) {
        if (sap.ui.Device.system.phone) {
            event.getParameter("listItem").setSelected(false);
        }
        this.bus.publish("nav", "to", {
            id: event.getParameter('listItem').getCustomData()[0].getValue()
        });
    }
});