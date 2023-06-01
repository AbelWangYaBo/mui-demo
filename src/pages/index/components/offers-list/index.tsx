import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Tooltip from "@mui/material/Tooltip";

import styles from "./index.module.less";

interface IOfferItem {
  title: string;
  url: string;
}

interface IOffers {
  title: string;
  list?: IOfferItem[];
}

const Offers = () => {
  const list: IOffers[] = [
    {
      title: "Scheme / Spot Offer",
    },
    {
      title: "New Introduction / Discontinuation",
    },
    {
      title: "End User Declaration (EUD)",
    },
    {
      title: "HSN / GST Document",
    },
  ];

  return (
    <>
      <h2>Offers</h2>
      <Grid container spacing={2}>
        {list.map((item, i) => (
          <Grid xs={12} sm={12} md={6} xl={3} key={i}>
            <div className={`${styles.item}`}>
              <Tooltip title={item.title}>
                <Typography component="h3">{item.title}</Typography>
              </Tooltip>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Offers;
