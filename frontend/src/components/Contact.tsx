import { grey } from "@mui/material/colors";
import { BoxProps, IconButton, Stack, Typography, Box } from "@mui/material";
import { Delete, Phone } from "@mui/icons-material";

interface Props extends BoxProps {
  name: string;
  phoneNumber: string;
  onDelete: () => void;
}

export default function Contact({
  name,
  phoneNumber,
  onDelete,
  ...props
}: Props) {
  return (
    <Box
      border={`1px solid ${grey[400]}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      bgcolor="white"
      {...props}
    >
      <Stack spacing={1}>
        <Typography variant="body1">{name}</Typography>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          color={grey[400]}
        >
          <Phone />
          <Typography variant="body2">{phoneNumber}</Typography>
        </Stack>
      </Stack>
      <IconButton
        color="error"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <Delete />
      </IconButton>
    </Box>
  );
}
