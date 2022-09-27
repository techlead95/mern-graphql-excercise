import { Alert, Box, Skeleton, Stack } from "@mui/material";
import { useModal } from "mui-modal-provider";
import useContacts from "../hooks/useContacts";
import useDeleteContact from "../hooks/useDeleteContact";
import Contact from "./Contact";
import ContactFormDialog from "./ContactFormDialog";

interface Props {
  search: string;
}

export default function ContactList({ search }: Props) {
  const { data, error } = useContacts();
  const { showModal } = useModal();
  const deleteContact = useDeleteContact();

  if (error) {
    return <Alert severity="error">Something went wrong!</Alert>;
  }

  if (!data) {
    return (
      <Stack spacing={2}>
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
      </Stack>
    );
  }

  const contacts = data.filter((contact) =>
    contact.lastName.toLowerCase().includes(search.toLowerCase())
  );

  if (!contacts.length) {
    return <Alert severity="info">No contacts!</Alert>;
  }

  return (
    <Box>
      {contacts.map((contact, index) => (
        <Contact
          key={contact.id}
          name={`${contact.firstName} ${contact.lastName}`}
          phoneNumber={contact.phoneNumber}
          mt={index ? "-1px" : 0}
          role="button"
          tabIndex={0}
          onClick={() =>
            showModal(ContactFormDialog, { defaultValues: contact })
          }
          onDelete={() => deleteContact.mutate({ id: contact.id })}
          sx={{
            borderRadius:
              index === 0
                ? "4px 4px 0 0"
                : index === data.length - 1
                ? "0 0 4px 4px"
                : undefined,
          }}
        />
      ))}
    </Box>
  );
}
