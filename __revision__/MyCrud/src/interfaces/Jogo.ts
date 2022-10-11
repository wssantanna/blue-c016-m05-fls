
import { Categorias } from '../tipos/Categorias';

export interface IJogo {
    titulo: string,
    descricao?: string,
    categoria: Categorias
}

export interface IJogoResponse extends IJogo {
    id: string | number,
    favorito: boolean
}