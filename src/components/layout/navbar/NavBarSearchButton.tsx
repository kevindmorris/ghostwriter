import { Search } from "@mui/icons-material";
import { styled } from "@mui/material";
import React from "react";
import NavBarSearch from "./NavBarSearch";

export default function NavBarSearchButton() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleKeyPress = React.useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F") {
      handleOpen();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <React.Fragment>
      <button
        onClick={handleOpen}
        className="h-8 flex-1 m-0 px-2 flex items-center relative bg-slate-100 hover:bg-slate-200 border rounded cursor-pointer transition-all outline-none"
      >
        <Search fontSize="small" className="" />
        <span className="mx-2">Search...</span>
        <div className="px-1 ml-auto bg-white font-bold border rounded text-sm hidden lg:block">
          Ctrl+Shift+F
        </div>
      </button>
      <NavBarSearch
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}
