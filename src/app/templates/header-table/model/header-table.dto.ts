import { TableHeaderModel } from "src/app/organisms/table/model/table-header.dto";

export interface HeaderTableModel{
  title: string;
  tableHeader: TableHeaderModel[];
  tableData: any[];
}
