export interface RecursiveMenuInterface {
  id?: number | string;
  title: string;
  class: string;
  url: string;
  menu?: RecursiveMenuInterface[];
}
