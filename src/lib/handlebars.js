import { format } from "timeago.js";
//Leva el tiempo si desea guardar una recolecta y a la sesion inciada.
export const timeago = (savedTimestamp) => {
  return format(savedTimestamp);
};
