import moment from "moment";

export const formatDateInTimeAgo = (dateString) =>
  moment(dateString).format("MMMM Do YYYY, h:mm:ss a");
