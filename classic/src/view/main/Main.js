Ext.define('ExtJsTech.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainView',

    layout: 'border',
    items: [
        {
            region: 'west',
            xtype: 'panel',
            title: 'Навигация',
            width: 200,
            layout: 'anchor',
            controller: 'main',
            viewModel: 'main',

            items: [
                {
                    buttons: [
                        {
                            listeners: {
                                click: 'logOutFunction'
                            },
                            text: 'Выйти'

                        },
                        {
                            listeners: {
                            //     TODO
                            },
                            text: 'Таблица'
                        }
                    ]
                },
                {
                    xtype: 'treelist',
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                { text: 'Продукты1', leaf: true, view: 'mainlist' }

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
