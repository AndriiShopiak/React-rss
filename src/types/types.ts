interface resultList {
  name: string;
}
interface dataList {
  count: number;
  next: string;
  previous: string | null;
  results: resultList[];
}
export interface propsTypes {
  value: dataList;
}
