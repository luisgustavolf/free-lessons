import { ICepAddress } from "../iCepAddress";
import { ISearchReturnDto } from "./iSearchReturnDto";

export function getAddressFromDto(dto: ISearchReturnDto): ICepAddress {
  return {
    bairro: dto.bairro,
    cidade: dto.localidade,
    complemento: dto.complemento,
    logradouro: dto.logradouro,
    uf: dto.uf
  }
}