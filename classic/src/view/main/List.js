/**
 * This view is an example list of people.
 */
Ext.define('ExtJsTech.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ExtJsTech.store.Product',
        'ExtJsTech.view.main.list.ListController'
    ],

    controller: 'list',

    title: 'Products',

    store: {
        type: 'product'
    },

    columns: [
        { text: 'id',  dataIndex: 'id' },
        { text: 'Наименование', dataIndex: 'name', flex: 1},
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        { text: 'Количество', dataIndex: 'count', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
