import { breakpoints } from './tailwind.config'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(
  require('@fortawesome/free-brands-svg-icons/faFacebookSquare').definition,
  require('@fortawesome/free-brands-svg-icons/faTwitter').definition,
  require('@fortawesome/free-brands-svg-icons/faLinkedinIn').definition,
  require('@fortawesome/pro-light-svg-icons/faInfoCircle').definition,
  require('@fortawesome/pro-light-svg-icons/faCheck').definition,
  require('@fortawesome/pro-light-svg-icons/faTimes').definition,
  require('@fortawesome/pro-light-svg-icons/faBell').definition
)

export default function (Vue) {
  Vue.prototype.$breakpoints = Object.freeze(breakpoints)

  Vue.component('FA', {
    props: { name: { type: String, required: true } },
    render(h) {
      return h(FontAwesomeIcon, {
        attrs: this.$attrs,
        props: { icon: this.name.split('.') },
      })
    },
  })
}
