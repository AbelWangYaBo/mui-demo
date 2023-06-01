import Grid from "@mui/material/Unstable_Grid2";
import styles from "./index.module.less";
interface IItem {
  label: string;
  url?: string;
  children?: IItem[];
  xs?: number;
  sm?: number;
  md?: number;
}

const DocList = () => {
  const downloadList: IItem[] = [
    {
      label: "EUD Format for Methanol for Maharashtra",
      children: [
        {
          label: "EUD_Methanol_Maharashtra.docx",
        },
      ],
    },
    {
      label: "EUD Format for Methanol for Non-Maharashtra",
      children: [
        {
          label: "EUD_Methanol_Non-Maharashtra.docx",
        },
      ],
    },
    {
      label: "EUD Format for Hexane, Heptane & Pentane",
      children: [
        {
          label: "EUD_Hexane_Heptane_Pentane.docx",
        },
      ],
    },
    {
      label: "EUD Format for n-Hexane,n-Heptane & n-Pentane",
      children: [
        {
          label: "EUD_nHexane_n Heptane_nPentane_Cyclohexane.docx",
        },
      ],
    },
    {
      label: "Secondary Sales Data Format",
      children: [
        {
          label: "Secondary_Sales_Data_For_Merck.xlsx",
        },
      ],
    },
    {
      label: "Trade Compliance Policy",
      children: [
        {
          label: "Trade_Compliance_Policy.pdf",
        },
      ],
    },
    {
      label: "Template for Payment Disputes",
      children: [
        {
          label: "Payment_Dispute_Template.pdf",
        },
      ],
    },
    {
      label: "EUD format for Cell Line Products",
      children: [
        {
          label: "EUD_For_CellLine.docx",
        },
      ],
    },
    {
      label: "EUD Format for General Materials",
      children: [
        {
          label: "EUD_General.docx",
        },
        {
          label: "IsoPropyl_Alcohol_(IPA)_EUD_format.docx",
        },
        {
          label: "EUD_for_Deuterated_Products.docx",
        },
      ],
    },
    {
      label: "Merck Price List 2021",
      children: [
        {
          label: "Build_V1_1021.zip",
        },
        {
          label: "Application_Installation_And_Feature_Guide.pdf",
        },
      ],
    },
    {
      label: "Privacy Policy",
      children: [
        {
          label: "Privacy Policy of Merck Website_India DPO(clean).docx",
        },
      ],
      xs: 12,
      sm: 12,
      md: 12,
    },
  ];

  return (
    <Grid container>
      {downloadList.map((item, i) => (
        <Grid xs={item.xs || 12} sm={item.sm || 12} md={item.md || 6} key={i}>
          <div className={`${styles.item}`}>
            <h3 className={`${styles["item-title"]}`}>{item.label}</h3>
            <div>
              {item.children?.map((c, ci) => (
                <div className={`${styles["item-file-list"]}`} key={ci}>
                  <a href={c.url}>{c.label}</a>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default DocList;
