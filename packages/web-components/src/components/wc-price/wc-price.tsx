import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wc-price",
  styleUrl: "wc-price.scss",
  shadow: true
})
export class WcPrice {
  @Prop() priceNumber: string;

  render() {
    return <p class="wc-price">${this.priceNumber}</p>;
  }
}
