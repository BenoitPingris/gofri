import { Auth } from '~/services/auth'

export default (ctx, inject) => {
  const auth = new Auth(ctx.$axios)
  inject('authService', auth)
}
