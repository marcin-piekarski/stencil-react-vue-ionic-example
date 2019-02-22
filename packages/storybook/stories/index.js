/* global document */
import { storiesOf } from "@storybook/html";
import { withReadme, withDocs } from "storybook-readme";
import {
  withKnobs,
  text,
  boolean,
  number,
  color
} from "@storybook/addon-knobs";

// import ButtonReadme from '@slate/web-components/dist/';

import { defineCustomElements } from "@slate/web-components/dist/loader";
defineCustomElements(window);

const productImageSrc =
  "https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/400x225/9df78eab33525d08d6e5fb8d27136e95/m/a/macair-gold.jpg";
const productHref =
  "https://www.harveynorman.com.au/apple-macbook-air-13-3-inch-128gb-gold.html";

storiesOf("Web Components/Atoms", module)
  // .add("heading", () => "<h1>Hello World</h1>")
  // .add("button", () => {
  //   const button = document.createElement("button");
  //   button.innerText = "Hello Button";
  //   button.addEventListener("click", e => console.log(e));
  //   return button;
  // })
  .add("Card", () => `<wc-card>CONTENT GOES HERE</wc-card>`)
  .add(
    "Image",
    () =>
      `<wc-image image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>`
  )
  .add(
    "Link",
    () =>
      `<wc-link link-href="${productHref}" link-title="Apple Macbook"></wc-link>`
  )
  .add("Price", () => `<wc-price price-number="199.00"></wc-price>`)
  .add("Button", () => `<wc-button button-title="Button Title"></wc-button>`);

storiesOf("Web Components/Organisms", module)
  .addDecorator(withKnobs)
  .add("Product Card", () => {
    const buttonLabel = "Button Text";
    const buttonDefaultValue = "BUTTON TEXT";
    const buttonGroupId = "Button Options";

    const buttonValue = text(buttonLabel, buttonDefaultValue, buttonGroupId);

    const colorLabel = "Button Background";
    const colorDefaultValue = "#1f9d55";
    const colorGroupId = "Button Options";

    const colorValue = color(colorLabel, colorDefaultValue, colorGroupId);

    return `
      <style>
        :root {
          --wc-font-family: "system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif";
          --wc-link-text-color: #2779BD;
          --wc-link-text-color-hover: #3490DC;
          --wc-price-text-color: #cb1829;
          --wc-button-background: ${colorValue};
          --wc-button-background-hover: #38C172;
          /* --wc-button-border-radius: 20px; */
          --wc-button-text-color: #ffffff;
        }
  
        .mb-1 {
          padding-bottom: 0.75rem;
        }
        .pb-1 {
          padding-bottom: 1rem;
        }
  
        .max-w-xs {
          max-width: 20rem;
        }
      </style>
  
      <div class="max-w-xs">
        <wc-card>
          <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
          <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
          <wc-link class="mb-1" link-href="${productHref}" link-title="Cashback"></wc-link>
          <wc-price class="mb-1" price-number="199.00"></wc-price>
          <wc-button class="width-full" button-title="${buttonValue}"></wc-button>
        </wc-card>
      </div>
    `;
  });

storiesOf("Web Components/Templates", module).add(
  "Product Card",
  () => `
    <style>
      :root {
        --wc-font-family: "system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif";
        --wc-link-text-color: #2779BD;
        --wc-link-text-color-hover: #3490DC;
        --wc-price-text-color: #cb1829;
        --wc-button-background: #1F9D55;
        --wc-button-background-hover: #38C172;
        /* --wc-button-border-radius: 20px; */
        --wc-button-text-color: #ffffff;
      }

      .mb-1 {
        padding-bottom: 0.75rem;
      }
      .pb-1 {
        padding-bottom: 1rem;
      }
      .max-w-xs {
        max-width: 20rem;
      }

      .container {
        display: grid;
        grid-auto-columns: max-content; //added
        grid-auto-flow: dense; // added
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 25px;
        grid-template-columns: repeat(3, 1fr);
      }
      .grid-item {
        grid-column: span 1;
        grid-row: span 1;
      }
      .grid-item--wide {
        grid-column: span 2;
      }
      .grid-item--tall {
        grid-row: span 2;
      }
    </style>

    <div class="container">
      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>
      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>
      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>

      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>
      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>
      <wc-card class="grid-item">
        <wc-image class="mb-1" image-src="${productImageSrc}" image-alt="Apple Macbook"></wc-image>
        <wc-link class="mb-1" link-href="${productHref}" link-title="Apple Macbook"></wc-link>
        <wc-price class="mb-1" price-number="199.00"></wc-price>
        <wc-button class="width-full" button-title="Add to Cart"></wc-button>
      </wc-card>
    </div>
  `
);
