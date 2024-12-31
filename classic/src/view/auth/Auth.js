Ext.define('ExtJsTech.view.auth.Auth', {
    extend: 'Ext.form.Panel',
    xtype: 'authView',
    title: 'Авторизация',
    bodyPadding: 20,
    layout: 'anchor',

    controller: 'auth',
    viewModel: 'auth',

    defaults: {
        anchor: '100%'
    },

    items: [
        {
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Имя пользователя',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Пароль',
            inputType: 'password',
            allowBlank: false
        }
    ],

    buttons: [
        {
            listeners: {
                click: 'checkIsAuth'
            },
            text: 'Войти'

        }
    ]
});
