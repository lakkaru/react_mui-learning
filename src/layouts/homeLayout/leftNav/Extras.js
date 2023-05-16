import { Grid, Typography } from "@mui/material";
import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LeftNavComponent from "../../../components/leftNav/LeftNavComponent";

export default function Extras() {
  return (
    <Grid item>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"flex-start"}
        sx={{ py: 2, bgcolor: "#3b4b64" }}
      >
        <Grid item>
          <Typography>Extras</Typography>
        </Grid>
      </Grid>
      {/* pages */}
      <Grid item>
        <LeftNavComponent
          StartIcon={StarBorderOutlinedIcon}
          name="Pages"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* apps */}
      <Grid item>
        <LeftNavComponent
          StartIcon={WidgetsOutlinedIcon}
          name="Apps"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
    </Grid>
  );
}
