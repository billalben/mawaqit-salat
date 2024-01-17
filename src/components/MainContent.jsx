import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

function MainContent() {
  return (
    <>
      {/* Top Row */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>4:20 | 9 2023 سبتمبر</h2>
            <h1>مكة</h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2>متبقي حتى صلاة العصر</h2>
            <h1>00:10:20</h1>
          </div>
        </Grid>
      </Grid>
      {/* Top Row */}

      <Divider style={{ borderColor: "white", opacity: "0.1" }} />

      {/* Prayers Cards */}
      <Stack direction="row"></Stack>
      {/* Prayers Cards */}
    </>
  );
}

export default MainContent;
