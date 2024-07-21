export const formatPhoneNumber = (phoneNumber: string) => {
  const phoneNumberFormatted = phoneNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  return phoneNumberFormatted;
};
