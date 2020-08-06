export default (context) => {
    if (!context.app.context.app.$cookies.get('token')) {
        return context.redirect('/')
    }

    var token = context.app.context.app.$cookies.get('token');
    var user = context.app.context.app.$cookies.get('user');

    context.app.context.app.$cookies.remove('token');
    context.app.context.app.$cookies.remove('user');

    context.app.context.app.$cookies.set('token', token, {
        path: '/',
        maxAge:1800
    });

    context.app.context.app.$cookies.set('user', user, {
        path: '/',
        maxAge:1800
    })
}
