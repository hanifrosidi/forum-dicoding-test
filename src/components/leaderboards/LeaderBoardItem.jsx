import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Avatar, Stack } from "@mui/material";
import { userShape } from "./../threads/UseShape";

export function LeaderBoardItem({ user, score }) {
  return (
    <Grid
      container
      spacing={12}
      sx={{
        marginLeft: 2,
        marginY: 2,
      }}
    >
      <Grid size={10}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Avatar
            alt="Avatar Icon"
            src={user.avatar}
            sx={{ width: 34, height: 34, ml: 2 }}
          />
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="text.primary"
            sx={{ fontSize: 20, fontWeight: "medium" }}
          >
            {user.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid size={2}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="text.primary"
          sx={{ fontSize: 20, fontWeight: "medium", mt: 2, ml: 4 }}
        >
          {score}
        </Typography>
      </Grid>
    </Grid>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
