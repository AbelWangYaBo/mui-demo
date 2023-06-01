import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { IColumn, ITableRow } from "./index";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoadingMask from "@/components/loading-mask/index";

export default function TableList({
  columns,
  datas,
  loading,
}: {
  columns: IColumn[];
  datas: ITableRow[];
  loading: boolean;
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", position: "realtive" }}>
      {loading ? <LoadingMask /> : ""}
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell sx={{ minWidth: column.minWidth }} key={i}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas ? (
              datas.map((row) => (
                <TableRow
                  key={row.articleNo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((column, i) => (
                    <TableCell key={i}>
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
                <TableCell colSpan={columns.length} align="center">
                  {""}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              DesserArticle No.
              <br />
              Millipore Article No.
            </TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Block Reason</TableCell>
            <TableCell align="right">Blocking Indicator</TableCell>
            <TableCell align="right">Dist. Chan.</TableCell>
            <TableCell>GST</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>
              MVGR - SBU
              <br />
              [Department]
            </TableCell>
            <TableCell>Case Lot Qty.</TableCell>
            <TableCell>GSP</TableCell>
            <TableCell>High Sea Sales Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.articleNo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.articleNo}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.blockReason}</TableCell>
              <TableCell align="center">{row.blcokingIndicator}</TableCell>
              <TableCell align="center">{row.distChan}</TableCell>
              <TableCell align="center">{row.gst}</TableCell>
              <TableCell align="center">{row.mode}</TableCell>
              <TableCell align="center">
                {row.mvgrSbu}
                <br />
                {row.department ? `[${row.department}]` : ""}
              </TableCell>
              <TableCell align="center">{row.caseLotQty}</TableCell>
              <TableCell align="center">{row.gsp}</TableCell>
              <TableCell align="center">{row.highSeaSalesProduct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
