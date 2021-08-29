import { Dialog } from "quasar";

const showErrorMessage = (message) => {
  Dialog.create({
    title: "An Error occurred!",
    message,
  });
};

export default showErrorMessage;
