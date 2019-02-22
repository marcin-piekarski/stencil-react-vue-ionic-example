import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wc-button",
  styleUrl: "wc-button.scss",
  shadow: true
})
export class WcButton {
  @Prop() buttonTitle: string;

  render() {
    return <button class="wc-button">{this.buttonTitle}</button>;
  }
}
