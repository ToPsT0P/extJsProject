Ext.define('ExtJsTech.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainView',

    layout: 'border',
    controller: 'main',
    viewModel: 'main',

    items: [
        {
            region: 'west',
            xtype: 'panel',
            title: 'Навигация',
            width: 200,
            layout: 'vbox',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Выйти',
                            handler: 'logOutFunction'
                        },
                        {
                            xtype: 'button',
                            text: 'Таблица',
                            handler: 'addTable'
                        }
                    ]
                },
                {
                    xtype: 'treelist',
                    reference: 'treeList',
                    itemId: 'treeList',
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                { text: 'Таблица: 1', leaf: true, view: 'mainlist' }
                            ]
                        }
                    },
                    listeners: {
                        itemClick: 'itemClick'
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'panel',
            itemId: 'contentPanel',
            layout: 'fit',
            bodyPadding: 10
        }
    ]
});
