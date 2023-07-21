// Se creo la carpeta store y se agrego el archivo bookStore

import create from "zustand"; // Se importo la libreria

// El interfaz define las propiedades del store
interface IBook {
  amount: number;

  //Propiedad paraactualizar el amount (recibira el numero como parametro)
  updateAmount: (newAmount: number) => void;
}

//Tetorna un objeto y create toma la funcion callback como parametro
// export const useBookStore = create<IBook>(() => ({
//   amount: 40, //Se establecio el valor inicial de amount (pertenece al interfaz)
//   author: "Este es un texto ",
// }));

//Actualizando estado
// export const useBookStore = create<IBook>((set) => ({
//   amount: 40,
//   updateAmount: (newAmount: number) => set({ amount: newAmount }),
// }));

//Accediendo al estado almacenado en la store
export const useBookStore = create<IBook>((set, get) => ({
  amount: 40,
  updateAmount: (newAmout: number) => {
    // el get nos da acceso al estado
    const amountState = get().amount;

    //el set definir el estado usamos set
    set({
      amount: newAmout + amountState,
    });
  },
}));
