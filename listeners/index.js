import * as commands from './commands/index.js';

export const registerListeners = (app) => {
  commands.register(app);
};
