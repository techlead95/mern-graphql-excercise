import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import { Contacts, Add, Search } from "@mui/icons-material";
import ContactList from "./components/ContactList";
import { useModal } from "mui-modal-provider";
import ContactFormDialog from "./components/ContactFormDialog";
import { useState } from "react";

export default function App() {
  const { showModal } = useModal();
  const [search, setSearch] = useState("");

  return (
    <Box maxWidth={640} mx="auto" bgcolor={grey[200]} p={3}>
      <Stack spacing={3}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Contacts />
          <Typography variant="h5" component="h1">
            Phone Book App
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">Contacts</Typography>
          <Button
            variant="contained"
            disableElevation
            startIcon={<Add />}
            onClick={() => showModal(ContactFormDialog)}
          >
            Add Contact
          </Button>
        </Box>

        <TextField
          placeholder="Search for contact by last name..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            background: "white",
          }}
        />

        <ContactList search={search} />
      </Stack>
    </Box>
  );
}
