/* jshint esversion: 6 */

Ext.define('ExtJsTech.view.auth.AuthController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.auth',

    checkIsAuth: function (button) {
        const viewModel = this.getViewModel();
        const form = button.up('form');
        const values = form.getValues();
        const userName = values.username;
        const password = values.password;

        const correctName = viewModel.get('correctName');
        const correctPassword = viewModel.get('correctPassword');

        if (userName === correctName && password === correctPassword) {

            localStorage.setItem('isAuthenticated', 'true');

            window.location.reload();

        } else {
            Ext.MessageBox.alert('Неудача!', 'Вы наверное где-то ошиблись');
        }
    }
});
