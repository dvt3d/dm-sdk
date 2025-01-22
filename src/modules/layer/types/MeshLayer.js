/**
 * @Author: Caven Chen
 */

import { THREE } from '../../../name-space'
import Layer from '../Layer'

class MeshLayer extends Layer {
  constructor(id) {
    super(id)
    this._delegate = new THREE.Group()
    this._delegate.name = id
  }

  get type() {
    return Layer.getType('mesh')
  }

  set show(show) {
    if (this._show === show) {
      return
    }
    this._show = show
    this._delegate.visible = show
  }

  get show() {
    return this._show
  }

  _mountedHook() {
    const world = this._viewer.scene.world
    world.add(this._delegate)
  }
}

Layer.registerType('mesh')

export default MeshLayer
