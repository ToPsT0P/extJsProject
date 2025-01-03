Ext.define('ExtJsTech.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    addTable: function () {
        var treeList = this.lookupReference('treeList');
        var rootNode = treeList.getStore().getRoot();
        var newTableName = 'Таблица: ' + (rootNode.childNodes.length + 1);

        rootNode.appendChild({
            text: newTableName,
            leaf: true,
            view: 'mainlist'
        });
        },

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
