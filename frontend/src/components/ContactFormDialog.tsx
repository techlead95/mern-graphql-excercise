import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { Contact } from "../types";
import { useForm } from "react-hook-form";
import useAddContact from "../hooks/useAddContact";
import useUpdateContact from "../hooks/useUpdateContact";

interface Props extends DialogProps {
  defaultValues?: Contact;
}

export default function ContactFormDialog({ defaultValues, ...props }: Props) {
  const { register, handleSubmit } = useForm<Contact>({
    defaultValues,
  });
  const addContact = useAddContact();
  const updateContact = useUpdateContact();

  const onSuccess = () => {
    props.onClose?.({}, "escapeKeyDown");
  };

  return (
    <Dialog maxWidth="sm" fullWidth {...props}>
      <DialogTitle>
        {defaultValues
          ? `Edit ${defaultValues.firstName} ${defaultValues.lastName}`
          : "New Contact"}
      </DialogTitle>
      <DialogContent>
        <Stack
          py={1}
          spacing={3}
          component="form"
          onSubmit={handleSubmit((values) => {
            if (defaultValues) {
              updateContact.mutate(values, { onSuccess });
            } else {
              addContact.mutate(values, { onSuccess });
            }
          })}
        >
          <TextField label="First Name" required {...register("firstName")} />
          <TextField
            label="Last Name"
            required
            defaultValue={defaultValues?.lastName ?? ""}
            {...register("lastName")}
          />
          <TextField
            label="Phone Number"
            required
            defaultValue={defaultValues?.phoneNumber ?? ""}
            {...register("phoneNumber")}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={addContact.isLoading}
          >
            Submit
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
