export interface Calificacion {
    id: number;
    estudianteId: number;
    cursoId: number;
    nota: number;
    comentarios?: string;
}
