import { mvgrList } from "./const";

export function createData(
  articleNo: string,
  description: string,
  blockReason: string,
  blcokingIndicator: string | number,
  distChan: string | number,
  gst: string,
  mode: string,
  mvgrSbu: string,
  department: string,
  caseLotQty: string | number,
  gsp: string,
  highSeaSalesProduct: string
) {
  return {
    articleNo,
    description,
    blockReason,
    blcokingIndicator,
    distChan,
    gst,
    mode,
    mvgrSbu,
    department,
    caseLotQty,
    gsp,
    highSeaSalesProduct,
  };
}

export const getList = (query?: AnyObject) => {
  let data = mvgrList.map((d, i) => {
    return createData(
      `${234520 + i}-1GMCN`,
      "Conalbumin, Egg",
      "License is required ",
      "05",
      12,
      "HSN Code:",
      "Air Pax",
      "BAA - 696",
      "Bioscience Order",
      0,
      "33,620.00",
      ""
    );
  });
  const pageNum = query?.pageNum || 1
  const pageSize = query?.pageSize || 10
  const name = query?.name || ''
  return new Promise((res) => {
    setTimeout(() => {
      if (name) {
        data = data.filter(d => d.articleNo.includes(name));
      }
      const list = data.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + pageSize);
      res({
        total: data.length,
        rows: list
      })
    }, 800)
  })
}