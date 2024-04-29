export type LeadContactProps = {
  name: string;
  email?: string;
  phone?: string;
  extra?: string;
};

export const FormData = {};

export const sendMailerliteContact = async ({
  name,
  email,
  phone,
  extra,
}: LeadContactProps) => {
  console.log(name, email, phone, extra);
};
