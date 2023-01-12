#!/usr/bin/env node

import CliApplication from './app/cli-application.js';
import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';
import ImportCommand from './cli-command/import-command.js';

const myManager = new CliApplication();
myManager.registerCommands([
  new HelpCommand,
  new VersionCommand,
  new ImportCommand,
]);

myManager.processCommand(process.argv);
