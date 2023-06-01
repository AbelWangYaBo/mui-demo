import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TableList from "@/components/table-list";
import { getList } from "./mock";
import { useEffect, useState } from "react";
import * as React from "react";
import Pagination from "@mui/material/Pagination";

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

export interface IColumn {
  label: string | JSX.Element;
  prop?: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
  format?: (row: ITableRow) => string | JSX.Element;
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
    onSubmit: async (values, helper) => {
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
          <FormControl sx={{ width: 240, backgroundColor: "#ffffff" }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Select TollCenter
            </InputLabel>
            <Select
              value={formik.values.tollCenter}
              onChange={formik.handleChange}
              autoWidth
              label="tollCenter"
              name="tollCenter"
            >
              <MenuItem value="">
                <em>Select TollCenter</em>
              </MenuItem>
              {tollCenterList.map((m, d) => (
                <MenuItem value={m.value} key={d}>
                  {m.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Article No or Product Name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Search for Article No OR Product Name"
            sx={{ width: 240, backgroundColor: "#ffffff" }}
          />
          <Button size="large" sx={{ ml: 3 }} type="submit" variant="contained">
            Continue
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

const Products = () => {
  const columns: IColumn[] = [
    {
      label: "Toll Center",
      prop: "tollCenter",
      minWidth: 170,
      align: "center",
    },
    {
      label: "Products",
      prop: "products",
      minWidth: 170,
      align: "center",
    },
  ];

  const [rows, setRows] = useState<ITableRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

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

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setQueryParams({ ...queryParams, pageNum: value });
    getDatas({ ...queryParams, pageNum: value });
  };

  return (
    <>
      <QueryForm loading={loading} handleSearch={handleSearch}></QueryForm>
      <TableList columns={columns} datas={rows} loading={loading} />
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
            page={page}
            onChange={handleChange}
            color="secondary"
          />
        ) : (
          ""
        )}
      </Stack>
    </>
  );
};

export default Products;
