import { recupererTravaux, } from "./api.js";
import { affichageTravaux, } from "./gallery.js";


const travaux = await recupererTravaux();
affichageTravaux(travaux);