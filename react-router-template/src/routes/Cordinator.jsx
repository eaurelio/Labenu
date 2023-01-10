export function goToHome(navigate) {
  navigate('/')
}

export function goToProfile(navigate, name) {
  navigate(`/profile/${name}`)
}

export function goToLogin(navigate) {
  navigate('login')
}