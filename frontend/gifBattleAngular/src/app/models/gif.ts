export interface Gif {
  id: string;
  url: string;
  caption: string;
  vote: number;
}

// Generated by https://quicktype.io

export interface GifGiphy {
  id: string;
  type: string;
  url: string;
  title: string;
  images: Images;
}

export interface Images {
  original: Original;
}

export interface Original {
  url: string;
}
