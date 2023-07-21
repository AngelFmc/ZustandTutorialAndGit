// En el archivo app realizara el codigo para acceder al store
import { useBookStore } from "./store/bookStore"; //Se importa la store

//Para difundir el objeto con multiples estados importamos shallow
import { shallow } from "zustand/shallow";

function App() {
  //Se llama el hook, en el parametro se indica que propiedad se quiere extraer del store
  //De esta manera se acceden a mas estados pero de manera individual

  // const amount = useBookStore((state) => state.amount);
  // const title = useBookStore((state) => state.author);

  // De esta manera se genera un objeto con multiples estados o propiedades

  const { amount, title } = useBookStore(
    (state) => ({
      amount: state.amount,
      title: state.author,
    }),
    shallow
  );

  return (
    <>
      <div>
        <h1>Books: {amount}</h1>
        <h4>Title: {title}</h4>
      </div>
    </>
  );
}

export default App;
