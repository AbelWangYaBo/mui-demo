import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TableList from "@/components/table-list/index";
import { getList } from "./mock";
import { useEffect, useState } from "react";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { ITableColumn } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import OrderDetail from "./detail";

export interface ITableRow {
  articleNo: string;
  description: string;
  blockReason: string;
  blcokingIndicator: string | number;
  distChan: string | number;
  gst: string;
  mode: string;
  mvgrSbu: string;
  department: string;
  caseLotQty: string | number;
  gsp: string;
  highSeaSalesProduct: string;
}

const QueryForm = ({
  loading,
  handleSearch,
}: {
  loading: boolean;
  handleSearch: (val: AnyObject) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      tollCenter: "",
      viewDelete: false,
      submit: null,
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values, helpers) => {
      try {
        const { name, tollCenter } = values;
        handleSearch({ name, tollCenter });
        return;
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const tollCenterList = [
    "MILLIPORE (INDIA)  PVT.  LTD. [ 62A1 ]",
    "Merck Specialties Private Ltd. [ 62A2 ]",
    "Suma Pharmaceuticals Pvt. Ltd. [ 62B1 ]",
    "Priyadarshini Microtech Pvt.Ltd   [ 62B2 ]",
    "Sunbell Alloys Co.Of India Ltd [ 62B3 ]",
    "Samarth Acid Products [ 62B5 ]",
    "Vijay Gas Industry [ 62B6 ]",
    "Nerul CWH [ 62C1 ]",
    "Merck Specialities [ 62C3 ]",
    "Custom Bonded WH Bangalore (MIPL) [ 62C9 ]",
  ].map((d) => ({
    label: d,
    value: d,
  }));

  return (
    <Box sx={{ backgroundColor: "#eef6e0", padding: 2 }}>
      <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
        <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap">
          <TextField
            label="Customer Code OR Customer Name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Search for Customer Code OR Customer Name"
            sx={{ width: 300, backgroundColor: "#ffffff" }}
          />
          <Button
            size="large"
            sx={{ ml: 3 }}
            type="submit"
            variant="contained"
            startIcon={<SearchIcon />}
          >
            View
          </Button>
        </Stack>
        {formik.errors.submit && (
          <Typography color="error" sx={{ mt: 3 }} variant="body2">
            {formik.errors.submit}
          </Typography>
        )}
      </form>
    </Box>
  );
};

const Index = () => {
  const columns: ITableColumn[] = [
    {
      label: "Customer",
      prop: "customer",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Web Order No.",
      prop: "webOrderNo",
      minWidth: 170,
      align: "center",
      format: (row) => {
        return (
          <Link
            underline="hover"
            sx={{ cursor: "pointer" }}
            onClick={() => onClickWebOrderNo(row)}
          >
            {row.webOrderNo}
          </Link>
        );
      },
    },
    {
      label: "PO No.",
      prop: "poNo",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Date",
      prop: "date",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Plant",
      prop: "plant",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Created By",
      prop: "createdBy",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Ship To Party",
      prop: "shipToParty",
      minWidth: 170,
      align: "center",
    },
    {
      label: "As Per Contract",
      prop: "asPerContract",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Requested Total",
      prop: "requestedTotal",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Comments?",
      prop: "comments",
      minWidth: 170,
      align: "center",
    },
    {
      label: "SM Comments?",
      prop: "smComments",
      minWidth: 170,
      align: "center",
    },
  ];

  const [rows, setRows] = useState<ITableRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({
    pageNum: 1,
  });

  useEffect(() => {
    getDatas();
  }, []);

  const handleSearch = (query: AnyObject) => {
    setQueryParams({ ...query, pageNum: 1 });
    getDatas({ ...query, pageNum: 1 });
  };

  const getDatas = async (query?: AnyObject) => {
    setLoading(true);
    const resp = await getList({ ...query });
    setRows(resp.rows);
    setTotal(resp.total);
    setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setQueryParams({ ...queryParams, pageNum: value });
    getDatas({ ...queryParams, pageNum: value });
  };

  const [open, setOpen] = useState(false);
  const [webOrderNo, setWebOrderNo] = useState("");

  const onClickWebOrderNo = (row) => {
    console.log("row", row);
    setWebOrderNo(row.webOrderNo);
    setOpen(true);
  };

  return (
    <>
      <QueryForm loading={loading} handleSearch={handleSearch}></QueryForm>
      <TableList
        columns={columns}
        datas={rows}
        loading={loading}
        // cellClick={cellClick}
      />
      <Stack
        spacing={2}
        sx={{
          marginTop: 2,
          alignItems: "center",
        }}
      >
        {total ? (
          <Pagination
            count={Math.ceil(total / 10)}
            page={queryParams.pageNum}
            onChange={handleChange}
            color="secondary"
          />
        ) : (
          ""
        )}
      </Stack>
      <OrderDetail
        open={open}
        webOrderNo={webOrderNo}
        onClose={() => {
          setOpen(false);
          setWebOrderNo("");
        }}
      />
    </>
  );
};

export default Index;
