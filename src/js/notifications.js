import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  badRequest(err) {
    error({
      text: err,
      delay: 3000,
    });
  },
};
