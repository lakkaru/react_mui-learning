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
import Component from "../../../components/leftNav/Component";

export default function Components({ components }) {
  return (
    <Grid item>
      {/* component label */}
    {/* component label */}
    <Grid container>
      <Typography>Components</Typography>
      </Grid>
      {/* base */}
      <Grid item>
        <Component
          StartIcon={CameraRollOutlinedIcon}
          name="Base"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* buttons */}
      <Grid item>
        <Component
          StartIcon={NearMeOutlinedIcon}
          name="Buttons"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* charts */}
      <Grid item>
        <Component
          StartIcon={ScheduleOutlinedIcon}
          name="Charts"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* editors */}
      <Grid item>
        <Component
          StartIcon={CodeOffOutlinedIcon}
          name="Editors"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* forms */}
      <Grid item>
        <Component
          StartIcon={ListAltOutlinedIcon}
          name="Forms"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* google maps */}
      <Grid item>
        <Component
          StartIcon={AssistantDirectionOutlinedIcon}
          name="Google Maps"
          ButtonDetails={{ face: "Pro", vari: "error" }}
        />
      </Grid>
      {/* icons */}
      <Grid item>
        <Component
          StartIcon={StarBorderPurple500OutlinedIcon}
          name="Icons"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* notifications */}
      <Grid item>
        <Component
          StartIcon={NotificationsNoneOutlinedIcon}
          name="Notifications"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* plugings */}
      <Grid item>
        <Component
          StartIcon={OfflineBoltOutlinedIcon}
          name="Plugins"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* tables */}
      <Grid item>
        <Component
          StartIcon={TableRowsOutlinedIcon}
          name="Tables"
          EndIcon={ArrowBackIosNewOutlinedIcon}
        />
      </Grid>
      {/* widgets */}
      <Grid item>
        <Component
          StartIcon={WidgetsOutlinedIcon}
          name="Widgets"
          ButtonDetails={{ face: "New", vari: "primary" }}
        />
      </Grid>
    </Grid>
  );
}
