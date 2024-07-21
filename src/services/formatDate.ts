export const formatDate = (date: string) => {
  const dateFormatted = new Date(date);
  return dateFormatted.toLocaleDateString('pt-BR');
};
