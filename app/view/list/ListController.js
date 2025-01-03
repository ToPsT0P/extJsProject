Ext.define('ExtJsTech.view.main.list.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list',


    onCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e) {
        var column = grid.getColumnManager().getColumns();

        if (column[cellIndex].dataIndex === 'name') {
            this.onItemSelected(grid, record);
        }
    },

    onItemSelected: function (view, item) {
        var store = view.getStore();
        var product = store.getById(item.get('id'));

        var window = Ext.create('Ext.window.Window', {
            title: 'Редактирование товара: ' + item.get('name'),
            modal: true,
            layout: 'fit',

            items: [
                {
                    xtype: 'form',
                    bodyPadding: 20,
                    height: 'fit',
                    width: 600,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'ID:',
                            itemId: 'idField',
                            value: item.get('id')
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: "Наименование:",
                            itemId: 'nameField',
                            value: item.get('name')
                        },
                        {
                            xtype: 'panel',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Цена:'
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'priceFieldName',
                                    itemId: 'priceField',
                                    value: item.get('price'),
                                    flex: 1,
                                    listeners: [{
                                        change: function (field, newValue) {
                                            if (newValue <= 0) {
                                                field.setValue(item.get('price'));
                                                Ext.Msg.alert('Ошибка','Цена должна быть выше 0');
                                            }
                                        }
                                    }]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Кол-во:'
                                },
                                {
                                    xtype: 'numberfield',
                                    itemId: 'countField',
                                    name: 'countFieldName',
                                    value: item.get('count'),
                                    flex: 1,
                                    listeners: [{
                                        change: function(field, newValue) {

                                            if (newValue < 0) {
                                                field.setValue(0);
                                                Ext.Msg.alert('Ошибка', 'Количество не может быть меньше 0');
                                            }

                                            if (newValue !== Math.floor(newValue)) {
                                                Ext.Msg.alert('Ошибка', 'Количество не должно быть дробным числом');
                                                field.setValue(0);
                                            }
                                        }
                                    }]
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Сохранить',
                            margin: 10,

                            listeners: [{
                                click: function(button) {
                                    var form = button.up('form');
                                    var values = form.getValues();
                                    var newPrice = values.priceFieldName;
                                    var newCount = values.countFieldName;

                                    product.set({
                                        price: newPrice,
                                        count: newCount
                                    });

                                    store.sync();
                                    Ext.Msg.alert('Успешно!','Вы изменили данные');
                                    window.close();
                                }
                            }]
                        },
                        {
                            xtype: 'button',
                            text: 'Отменить',
                            margin: 10,

                            listeners: [{
                                click: function(button) {
                                    var form = button.up('form');

                                    form.getForm().setValues({
                                        priceFieldName: item.get('price'),
                                        countFieldName: item.get('count')
                                    });
                                    window.close();
                                }
                            }]
                        }
                    ]
                }
            ]
        });

        window.show();
    },

    SearchingDescription: function (textfield, newValue) {
        var grid = this.getView();
        var store = grid.getStore();

        store.clearFilter(true);

        store.filter(function(record){
            return record.get('description').toLowerCase().includes(newValue.toLowerCase());
        });
    },

    SearchingID: function (textfield, newValue) {
        this.getView().getStore().filter('id', newValue);
    }
});
