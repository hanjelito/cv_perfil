import { directoryStructure } from './structure.js';
import { translations } from './translations.js';
import { Terminal } from './terminal.js';

// Initialize the terminal with the canvas element
const canvas = document.getElementById("terminalCanvas");
const terminal = new Terminal(canvas, directoryStructure, translations);

// Start the terminal
terminal.init();