import { Drawer, IconButton, List } from "@mui/material";
import React from "react";
import { History } from "@mui/icons-material";
import { useAppSelector } from "../../../state/hooks";
import { useNavigate } from "react-router-dom";

export default function NavBarDrawer() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <IconButton
        size="small"
        disableFocusRipple
        disableTouchRipple
        onClick={handleOpen}
        className="hidden lg:flex"
      >
        <History />
      </IconButton>
      <Drawer
        open={open}
        anchor="right"
        onClose={handleClose}
        PaperProps={{ sx: { width: "40vw", maxWidth: 400, padding: 1 } }}
        className="hidden lg:block"
      >
        <Contents handleClose={handleClose} />
      </Drawer>
    </React.Fragment>
  );
}

const Contents = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();

  const history = useAppSelector((state) => state.history.base);

  return (
    <React.Fragment>
      <h1 className="text-2xl border-b mb-1">History</h1>
      <ul>
        {history.map((e, i) => (
          <li
            key={i}
            onClick={() => {
              navigate(`/q/${e}`);
              handleClose();
            }}
            className="hover:bg-slate-100 rounded px-2 py-1 cursor-pointer"
          >
            {e}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
