type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type Prefecture = {
  id: number;
  name: string;
};

type City = {
  id: number;
  name: string;
};

type FontFamily = {
  id: number;
  name: string;
  style: string;
};

type LayoutParts = {
  id: number;
  name: string;
};

type classDisplay = 'none' | 'block' | 'flex';

type Fetcher = (url: string) => Promise<any>;
