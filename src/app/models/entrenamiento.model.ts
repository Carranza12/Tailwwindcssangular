export interface Entrenamiento {
    title: string;
    description: string;
}

export interface Semana {
    title: string;
    entrenamientos: Entrenamiento[];
}