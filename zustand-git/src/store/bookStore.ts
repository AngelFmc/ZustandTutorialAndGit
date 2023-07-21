// Se creo la carpeta store y se agrego el archivo bookStore

import create from "zustand"; // Se importo la libreria

// El interfaz define las propiedades del store
interface IBook {
  amount: number;
  author: string;
}

//Tetorna un objeto y create toma la funcion callback como parametro
export const useBookStore = create<IBook>(() => ({
  amount: 40, //Se establecio el valor inicial de amount (pertenece al interfaz)
  author: "Este es un texto ",
}));
