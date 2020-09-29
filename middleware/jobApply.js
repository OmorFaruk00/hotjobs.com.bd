export default (context) => {
  if (!context.app.context.app.$cookies.get('apply')) {
    return context.redirect('/')
  }
}
