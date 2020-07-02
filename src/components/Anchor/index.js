import Anchor from './Anchor'
import AnchorLink from './AnchorLink'

Anchor.install = function (Vue) {
  Vue.component(Anchor.name, Anchor)
}

AnchorLink.install = function (Vue) {
  Vue.component(AnchorLink.name, AnchorLink)
}

export default {
  Anchor,
  AnchorLink
}
