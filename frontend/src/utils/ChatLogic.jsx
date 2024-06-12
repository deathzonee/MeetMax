export const getSender = (loggedUser, users) => {
  if (!users) return;
  return loggedUser._id === users[0]._id ? users[1] : users[0];
};

export const convertTime = (dateString) => {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${hours % 12}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;
  return formattedTime;
};
