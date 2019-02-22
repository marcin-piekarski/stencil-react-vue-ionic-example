import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wc-image",
  styleUrl: "wc-image.scss",
  shadow: true
})
export class WcImage {
  @Prop() imageSrc: string;
  @Prop() imageAlt: string;

  render() {
    return <img class="wc-image" src={this.imageSrc} alt={this.imageAlt} />;
  }
}
