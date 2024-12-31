Ext.application({
    extend: 'ExtJsTech.Application',
    name: 'ExtJsTech',
    requires: [
        'ExtJsTech.*',
        'ExtJsTech.model.Product'
    ],

    launch: function() {

        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated === 'true') {
            // Если авторизован, показываем основной контент
            this.setMainView({
                xtype: 'mainView'
            });
        } else {
            // Если не авторизован, показываем страницу авторизации
            this.setMainView({
                xtype: 'authView'
            });
        }
    }
});
