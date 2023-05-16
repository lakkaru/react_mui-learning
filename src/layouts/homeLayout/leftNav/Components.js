import React from "react";
import { Grid, Typography } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CameraRollOutlinedIcon from "@mui/icons-material/CameraRollOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AssistantDirectionOutlinedIcon from "@mui/icons-material/AssistantDirectionOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LeftNavComponent from "../../../components/leftNav/LeftNavComponent";

export default function LeftNavComponents({ LeftNavComponents }) {
  return (
    <Grid item>
    {/* LeftNavComponent label */}
    <Grid container>
      <Typography>LeftNavComponents</Typography>
      </Grid>
      {/* base */}
      <Grid item>
        <LeftNavComponent
          StartIcon={CameraRollOutlinedIcon}
          name="Base"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* buttons */}
      <Grid item>
        <LeftNavComponent
          StartIcon={NearMeOutlinedIcon}
          name="Buttons"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* charts */}
      <Grid item>
        <LeftNavComponent
          StartIcon={ScheduleOutlinedIcon}
          name="Charts"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* editors */}
      <Grid item>
        <LeftNavComponent
          StartIcon={CodeOffOutlinedIcon}
          name="Editors"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* forms */}
      <Grid item>
        <LeftNavComponent
          StartIcon={ListAltOutlinedIcon}
          name="Forms"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* google maps */}
      <Grid item>
        <LeftNavComponent
          StartIcon={AssistantDirectionOutlinedIcon}
          name="Google Maps"
          ButtonDetails={{ face: "Pro", vari: "error" }}
        />
      </Grid>
      {/* icons */}
      <Grid item>
        <LeftNavComponent
          StartIcon={StarBorderPurple500OutlinedIcon}
          name="Icons"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* notifications */}
      <Grid item>
        <LeftNavComponent
          StartIcon={NotificationsNoneOutlinedIcon}
          name="Notifications"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* plugings */}
      <Grid item>
        <LeftNavComponent
          StartIcon={OfflineBoltOutlinedIcon}
          name="Plugins"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* tables */}
      <Grid item>
        <LeftNavComponent
          StartIcon={TableRowsOutlinedIcon}
          name="Tables"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* widgets */}
      <Grid item>
        <LeftNavComponent
          StartIcon={WidgetsOutlinedIcon}
          name="Widgets"
          ButtonDetails={{ face: "New", vari: "primary" }}
        />
      </Grid>
    </Grid>
  );
}
