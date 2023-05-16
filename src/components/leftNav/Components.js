import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CameraRollOutlinedIcon from "@mui/icons-material/CameraRollOutlined";
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

export default function Components({components}) {
  return (
    <Grid item>
        {/* component label */}
      <Grid item> 
        <Grid
          container
          flexDirection={"column"}
          alignItems={"flex-start"}
          sx={{ py: 2, bgcolor: "#3b4b64" }}
        >
          <Grid item>
            <Typography>Components</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* base */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <CameraRollOutlinedIcon></CameraRollOutlinedIcon>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Base</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* buttons */}
      <Grid item>
        <Grid container justifyContent={"space-between"}sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <NearMeOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Buttons</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* charts */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <ScheduleOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Charts</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* editors */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <CodeOffOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Editors</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* forms */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <ListAltOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Forms</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* google maps */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <AssistantDirectionOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Google Maps</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <Button variant='contained' color="error" sx={{ padding: '1px 1px', fontSize:'.5em' }}>Pro</Button>
          </Grid>
        </Grid>
      </Grid>
      {/* icons */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <StarBorderPurple500OutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Icons</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* notifications */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <NotificationsNoneOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Notifications</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* plugings */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <OfflineBoltOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Plugins</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* tables */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <TableRowsOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Tables</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: ".6em" }}
            ></ArrowBackIosNewOutlinedIcon>
          </Grid>
        </Grid>
      </Grid>
      {/* widgets */}
      <Grid item>
        <Grid container justifyContent={"space-between"} sx={{py: 1}}>
          <Grid item>
            <Grid container>
              <Grid item>
                <WidgetsOutlinedIcon/>
              </Grid>
              <Grid item>
                <Typography sx={{ pl: 3 }}>Widgets</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <Button variant='contained' sx={{ padding: '1px 1px', fontSize:'.5em' }}>New</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
