import { Grid, Typography, Button } from "@mui/material";

export default function LeftNavComponent({ StartIcon, name, EndIcon, ButtonDetails }) {
//   console.log(ButtonDetails?.face);

  return (
    <Grid container justifyContent={"space-between"} sx={{ py: 1 }}>
      <Grid item>
        <Grid container>
          <Grid item>
            <StartIcon />
          </Grid>
          <Grid item>
            <Typography sx={{ pl: 3 }}>{name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      {EndIcon !== undefined && (
        <Grid item>
          <EndIcon sx={{ fontSize: ".6em" }} />
        </Grid>
      )}
      {ButtonDetails !== undefined && (
        <Button
          variant="contained"
          color={ButtonDetails?.vari}
          sx={{ padding: "1px", fontSize: ".3em" }}
        >
          {ButtonDetails?.face}
        </Button>
      )}
    </Grid>
  );
}
