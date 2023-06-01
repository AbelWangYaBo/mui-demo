import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoadingMask from "@/components/loading-mask/index";
import type { ITableColumn } from "@/types";

export default function TableList<T>({
  columns,
  datas,
  loading,
  keyId,
  cellClick,
}: {
  columns: ITableColumn[];
  datas: T[];
  loading: boolean;
  keyId?: string;
  cellClick?: (row: AnyObject, column?: string) => void;
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", position: "realtive" }}>
      {loading ? <LoadingMask /> : ""}
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  sx={{ minWidth: column.minWidth }}
                  key={i}
                  align={column.headAlign || column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas ? (
              datas.map((row: AnyObject, rI) => (
                <TableRow
                  key={keyId ? row[keyId] : rI}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      align={column.align}
                      onClick={() => cellClick?.(row, column.prop)}
                    >
                      {column.format
                        ? column.format(row)
                        : column.prop
                        ? row[column.prop]
                        : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  {/* empty / no datas  */}
                  {""}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
