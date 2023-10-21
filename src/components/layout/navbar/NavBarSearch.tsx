import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, {
  AutocompleteCloseReason,
  autocompleteClasses,
} from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { Dialog, ListItem, Modal, Paper } from "@mui/material";
import { Api } from "../../../services/Api";
import _ from "lodash";
import { SuggestionsObject } from "../../../common/types";
import { useNavigate } from "react-router-dom";

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
    height: "40vh",
  },
  [`& .${autocompleteClasses.listbox}`]: {
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      alignItems: "flex-start",
      padding: 8,
      minHeight: 0,
      [`&.${autocompleteClasses.focused}`]: {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

export default function NavBarSearch({
  open,
  handleOpen,
  handleClose,
}: {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState<string>("");
  const [options, setOptions] = React.useState<SuggestionsObject[]>([]);

  const api = new Api();

  const search = async (value: string) => {
    try {
      const response = await api.getSuggestions(value);
      setOptions(response);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSearch = React.useCallback(_.debounce(search, 1000), []);

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value);

    if (value.length >= 2) debouncedSearch(value);
    else setOptions([]);
  };
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: SuggestionsObject | null
  ) => {
    if (value) {
      navigate(`/q/${value.word}`);
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose} disableScrollLock>
        <Paper className="h-max w-[90vw] lg:w-[50vw] flex flex-col absolute top-1/4 left-1/2 -translate-x-1/2">
          <Autocomplete
            open
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onChange={handleChange}
            disableCloseOnSelect
            disablePortal
            includeInputInList
            options={options}
            isOptionEqualToValue={(option, value) => option.word === value.word}
            getOptionLabel={(option) => option.word}
            renderOption={(props, option, { selected }) => (
              <ListItem {...props}>{option.word}</ListItem>
            )}
            filterOptions={(x) => x}
            renderInput={(params) => (
              <InputBase
                autoFocus
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                placeholder="Search..."
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    handleClose();
                  }
                }}
                className="w-full p-4 outline-none border-b"
              />
            )}
            PopperComponent={PopperComponent}
          />
        </Paper>
      </Modal>
    </React.Fragment>
  );
}
