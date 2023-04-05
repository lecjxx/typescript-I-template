import { Carro } from "../types/types";
import { frota } from "./frota"

function buscarCarrosPorMarca(frota:Carro[], marca?:string) : Array<Carro> {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota, 'Ford'));
