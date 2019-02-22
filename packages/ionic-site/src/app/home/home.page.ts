import {
  Component,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";

import "@slate/web-components";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  productImageSrc =
    "https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/400x225/9df78eab33525d08d6e5fb8d27136e95/m/a/macair-gold.jpg";
  productHref =
    "https://www.harveynorman.com.au/apple-macbook-air-13-3-inch-128gb-gold.html";
  productData = {
    data: {
      category: {
        id: 11,
        description: null,
        name: "Pants & Shorts",
        product_count: 212,
        products: {
          items: [
            {
              id: 1129,
              name: "Liana Lace Shorts",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Ft%2Fvt11-ll_main_2.jpg",
              url_key: "liana-lace-shorts",
              price: {
                regularPrice: { amount: { value: 98, currency: "AUD" } }
              }
            },
            {
              id: 1130,
              name: "Amara Crochet Shorts",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Ft%2Fvt10-ly_main_2.jpg",
              url_key: "amara-crochet-shorts",
              price: {
                regularPrice: { amount: { value: 108, currency: "AUD" } }
              }
            },
            {
              id: 1131,
              name: "Portia Shorts",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fs%2Fvsw09-rn_main_2.jpg",
              url_key: "portia-shorts",
              price: {
                regularPrice: { amount: { value: 98, currency: "AUD" } }
              }
            },
            {
              id: 1132,
              name: "Lenora Crochet Shorts",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fa%2Fva10-ct_main_2.jpg",
              url_key: "lenora-crochet-shorts",
              price: {
                regularPrice: { amount: { value: 78, currency: "AUD" } }
              }
            },
            {
              id: 1133,
              name: "Bella Eyelet Capris",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fs%2Fvsw05-kh_main_2.jpg",
              url_key: "bella-eyelet-capris",
              price: {
                regularPrice: { amount: { value: 98, currency: "AUD" } }
              }
            },
            {
              id: 1134,
              name: "Fauna Palazzo Pants",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fs%2Fvsk08-ly_main_2.jpg",
              url_key: "fauna-palazzo-pants",
              price: {
                regularPrice: { amount: { value: 88, currency: "AUD" } }
              }
            },
            {
              id: 1135,
              name: "Calista Linen Pants",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fp%2Fvp05-rn_main_2.jpg",
              url_key: "calista-linen-pants",
              price: {
                regularPrice: { amount: { value: 98, currency: "AUD" } }
              }
            },
            {
              id: 1136,
              name: "Honora Wide Leg Pants",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fp%2Fvp04-ll_main_2.jpg",
              url_key: "honora-wide-leg-pants",
              price: {
                regularPrice: { amount: { value: 78, currency: "AUD" } }
              }
            },
            {
              id: 1137,
              name: "Clara Wide Leg Pants",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fd%2Fvd06-mt_main_2.jpg",
              url_key: "clara-wide-leg-pants",
              price: {
                regularPrice: { amount: { value: 98, currency: "AUD" } }
              }
            },
            {
              id: 1138,
              name: "Camilla Palazzo Pants",
              small_image:
                "https://veniapwa.com/img/resize/300?url=%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fd%2Fvd04-pe_main_2.jpg",
              url_key: "camilla-palazzo-pants",
              price: {
                regularPrice: { amount: { value: 88, currency: "AUD" } }
              }
            }
          ],
          total_count: 12
        },
        meta_title: null,
        meta_keywords: null,
        meta_description: null
      }
    }
  };

  // @ViewChild('test') myTestComponent: ElementRef<HTMLTestComponentElement>;
  // async onAction() {
  //     await this.myTestComponent.nativeElement.testComponentMethod();
  // }
}
