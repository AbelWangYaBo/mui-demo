import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
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
import LoadingButton from "@mui/lab/LoadingButton";
import { mvgrList } from "./const";
import TableList from "./table-list";
import { createData, getList } from "./mock";
import { useEffect, useState } from "react";
import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

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
      mvgr: "",
      viewDelete: false,
      submit: null,
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values, helpers) => {
      try {
        // await ;
        // navigate("/", {
        //   replace: true,
        // });

        console.log("onSubmit", values);
        const { name, mvgr } = values;
        handleSearch({ name, mvgr });
        return;
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <Box sx={{ backgroundColor: "#eef6e0", padding: 2 }}>
      <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
        <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap">
          <TextField
            label="Article No or Product Name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Search for Article No OR Product Name"
            sx={{ width: 240, backgroundColor: "#ffffff" }}
          />
          <FormControl sx={{ width: 240, backgroundColor: "#ffffff" }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              mvgr
            </InputLabel>
            <Select
              value={formik.values.mvgr}
              onChange={formik.handleChange}
              autoWidth
              label="mvgr"
              name="mvgr"
            >
              {mvgrList.map((m, d) => (
                <MenuItem value={m.value} key={d}>
                  {m.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            size="large"
            sx={{ ml: 3 }}
            type="submit"
            variant="contained"
            startIcon={<SearchIcon />}
          >
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
      label: (
        <>
          Article No.
          <br />
          Millipore Article No.
        </>
      ),
      prop: "articleNo",
      minWidth: 170,
    },
    {
      label: "Description",
      prop: "description",
      minWidth: 170,
    },
    {
      label: "Block Reason",
      prop: "blockReason",
      minWidth: 170,
    },
    {
      label: "Blocking Indicator",
      prop: "blockingIndicator",
      minWidth: 170,
    },
    {
      label: "Dist. Chan.",
      prop: "distChan",
      minWidth: 170,
    },
    {
      label: "GST",
      prop: "gst",
      minWidth: 170,
    },
    {
      label: "Mode",
      prop: "mode",
      minWidth: 170,
    },
    {
      label: (
        <>
          MVGR - SBU
          <br />
          [Department]
        </>
      ),
      minWidth: 170,
      format: (row) => (
        <>
          {row.mvgrSbu}
          <br />
          {row.department ? `[${row.department}]` : ""}
        </>
      ),
    },
    {
      label: "Case Lot Qty.",
      prop: "caseLotQty",
      minWidth: 170,
    },
    {
      label: "GSP",
      prop: "gsp",
      minWidth: 170,
    },
    {
      label: "High Sea Sales Product",
      prop: "highSeaSalesProduct",
      minWidth: 170,
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

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
        <Pagination
          count={Math.ceil(total / 10)}
          page={queryParams.pageNum}
          onChange={handleChange}
          color="secondary"
        />
      </Stack>
    </>
  );
};

export default Products;
