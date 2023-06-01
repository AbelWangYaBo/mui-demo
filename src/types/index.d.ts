
export interface IBreadcurmb {
  label: string;
  path?: string;
}

type ALIGN = "left" | "center" | "right";

export interface ITableColumn {
  label: string | JSX.Element;
  prop?: string;
  minWidth?: number;
  align?: ALIGN;
  headAlign?: ALIGN;
  format?: (row: ITableRow) => string | JSX.Element;
}