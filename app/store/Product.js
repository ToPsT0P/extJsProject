Ext.define('ExtJsTech.store.Product', {
    extend: 'Ext.data.Store',

    alias: 'store.product',

    requires: [
        'ExtJsTech.model.Product'
    ],

    model: 'ExtJsTech.model.Product',

    data: { items: [
            { id: 1, name: "Телевизор Samsung just example", description: "Разрешение 8к, диагональ от Москвы до Санкт-Петербурга", price: 99999, count: 3 },
            { id: 2, name: "Клавиатура Zeekr 007 ultra-durable", description: "Самая громкая механическая клавиатура. Хотите будить соседей не только ором в 2 часа ночи? это для вас.", price: 4999, count: 15 },
            { id: 3, name: "Стол Changuan eight million", description: "Стол 300м в ширину и 150м в длину, поместится более 1млн кружок!", price: 58999, count: 1 },
            { id: 4, name: "Кроватка не видавшая программиста", description: "Стандартная кровать программиста, ни разу не видела, а если и видела, то с ноутбуком", price: 100000000, count: 0 }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    
    
});
