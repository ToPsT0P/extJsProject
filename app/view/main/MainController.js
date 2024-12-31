Ext.define('ExtJsTech.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    logOutFunction: function () {
        localStorage.removeItem('isAuthenticated');
        window.location.reload();
    },

    itemClick: function (tree, info) {
        const nodeData = info.node.data;
        const viewName = nodeData.view;
        const contentPanel = Ext.ComponentQuery.query('#contentPanel')[0];


        contentPanel.removeAll();

        if (viewName) {
            contentPanel.add({
                xtype: viewName
            });
        }
    }
});
