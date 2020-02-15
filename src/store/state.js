let defaultCity = '北京'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city || '北京'
  }
} catch (e) {}

export default {
  city: defaultCity
}
