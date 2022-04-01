import React from "react";

const NotificationContext = React.createContext(
  (message, error, messageParams) => ({
    message,
    error,
    messageParams,
  })
);

export default NotificationContext;
