import React from "react";

function useNotifications() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const notify = React.useCallback(
    function (msg) {
      setMessage(msg);
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 1000);
    },
    [setMessage, setOpen]
  );

  return [notify, open, message];
}

export { useNotifications };
