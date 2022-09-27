export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type OmitId<T> = Omit<T, "id">;
