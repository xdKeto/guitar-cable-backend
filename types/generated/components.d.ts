import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsKontak extends Struct.ComponentSchema {
  collectionName: 'components_elements_kontaks';
  info: {
    displayName: 'kontak';
  };
  attributes: {
    linkShopee: Schema.Attribute.String;
    linkTiktok: Schema.Attribute.String;
    linkTokopedia: Schema.Attribute.String;
    noWhatsapp: Schema.Attribute.String;
  };
}

export interface ElementsMedia extends Struct.ComponentSchema {
  collectionName: 'components_elements_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images', true>;
    video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface ElementsProduk extends Struct.ComponentSchema {
  collectionName: 'components_elements_produks';
  info: {
    displayName: 'produk';
  };
  attributes: {
    harga: Schema.Attribute.String;
    keterangan: Schema.Attribute.Text;
    meter: Schema.Attribute.Integer;
    namaProduk: Schema.Attribute.Text;
  };
}

export interface ElementsSupportedBy extends Struct.ComponentSchema {
  collectionName: 'components_elements_supported_bies';
  info: {
    displayName: 'supportedBy';
  };
  attributes: {
    nama: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.kontak': ElementsKontak;
      'elements.media': ElementsMedia;
      'elements.produk': ElementsProduk;
      'elements.supported-by': ElementsSupportedBy;
    }
  }
}
