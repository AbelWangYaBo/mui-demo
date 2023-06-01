import { breadcrumbsState } from "@/store/breadcrumbs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BREADCRUMBS_MAP } from "@/constants";

const BreadCrumb = () => {
  const [breadcrumbs, setBreadcrumbs] = useRecoilState(breadcrumbsState);

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/masters/products":
        setBreadcrumbs([
          BREADCRUMBS_MAP.HOME,
          BREADCRUMBS_MAP.MASTERS,
          BREADCRUMBS_MAP.MASTER_LIST,
          BREADCRUMBS_MAP.PRODUCTS,
        ]);
        break;

      case "/masters/product-wise-toll-center":
        setBreadcrumbs([
          BREADCRUMBS_MAP.HOME,
          BREADCRUMBS_MAP.MASTERS,
          BREADCRUMBS_MAP.MASTER_LIST,
          BREADCRUMBS_MAP.PRODUCT_WISE_TOLL_CENTER,
        ]);
        break;

      default:
        setBreadcrumbs([BREADCRUMBS_MAP.HOME]);
        break;
    }
  }, [location.pathname]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        marginBottom: "15px",
      }}
    >
      {
        breadcrumbs && breadcrumbs.length
          ? breadcrumbs.map((d, i) => {
              if (i !== breadcrumbs.length - 1) {
                return (
                  <Link underline="hover" color="inherit" href={d.path} key={i}>
                    {d.label}
                  </Link>
                );
              }
              return (
                <Typography color="text.primary" key={i}>
                  {d.label}
                </Typography>
              );
            })
          : ""
        // <Typography color="text.primary">Dashboard</Typography>
      }
    </Breadcrumbs>
  );
};

export default BreadCrumb;
