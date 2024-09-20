export interface itemInfo {
  name: string;
  birth_year: string;
  skin_color: string;
  url: string;
}
export interface dataList {
  count: number;
  next: string;
  previous: string | null;
  results: itemInfo[];
}
export interface propsTypes {
  value: dataList;
}
