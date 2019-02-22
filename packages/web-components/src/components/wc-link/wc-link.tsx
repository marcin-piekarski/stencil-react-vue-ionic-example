import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wc-link",
  styleUrl: "wc-link.scss",
  shadow: true
})
export class WcLink {
  @Prop() linkHref: string;
  @Prop() linkTitle: string;

  render() {
    return (
      <a class="wc-link" href={this.linkHref}>
        {this.linkTitle}
      </a>
    );
  }
}
