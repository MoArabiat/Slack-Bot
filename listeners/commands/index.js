import { sampleCommandCallback } from './sample-command.js';

export const register = (app) => {
  app.command('/listtickets', sampleCommandCallback);
};
