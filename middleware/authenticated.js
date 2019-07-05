export default function({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  // console.log(store.state)
  if (!store.state.user.isTokenValid) {
    return redirect('/admin/login')
  }
}
