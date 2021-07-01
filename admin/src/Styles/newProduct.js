import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    "& > *": {
      margin: "8px",
      width: "100%",
    },
  },
  section: {
    padding: "5vh 0",
  },
  title: {
    padding: "2rem 0 3rem 0",
  },
});