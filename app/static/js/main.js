// main.js - Punto de entrada actualizado para usar el sistema centralizado
import { directoryStructure } from './structure.js';
import { translations } from './translations.js';
import { Terminal } from './terminal/index.js';
import { appData } from './data.js';

// Inicializar el terminal con el elemento canvas
const canvas = document.getElementById("terminalCanvas");
const terminal = new Terminal(canvas, directoryStructure, translations);

// Establecer opciones adicionales desde datos centralizados si es necesario
terminal.profileData = appData.profile;

// Iniciar el terminal
terminal.init();