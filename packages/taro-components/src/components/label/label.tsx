import { Component, h, ComponentInterface, Prop } from '@stencil/core'

@Component({
  tag: 'taro-label'
})
export class Label implements ComponentInterface {
  @Prop() for: string

  render () {
    return (
      <label htmlFor={this.for}>
        <slot />
      </label>
    )
  }
}
