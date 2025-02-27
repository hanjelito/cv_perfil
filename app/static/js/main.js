import { directoryStructure } from './structure.js';
import { translations } from './translations.js';
import { Terminal } from './terminal/index.js';

// Inicializar el terminal con el elemento canvas
const canvas = document.getElementById("terminalCanvas");
const terminal = new Terminal(canvas, directoryStructure, translations);

// Iniciar el terminal
terminal.init();