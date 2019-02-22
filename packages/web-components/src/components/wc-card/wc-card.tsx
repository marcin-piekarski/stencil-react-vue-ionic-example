import { Component } from "@stencil/core";

@Component({
  tag: "wc-card",
  styleUrl: "wc-card.scss",
  shadow: true
})
export class WcCard {
  render() {
    return (
      <div class="wc-card">
        <slot />
      </div>
    );
  }
}
