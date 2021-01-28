export class Channels {
    name: string;
    image: string;
    programs: Programs[];
}
export class Programs{
    title: string;
    type: Type;
    category: string;
    id: number;
    duration: any;
    url: string;
}
export enum Type {
    Podcast = 1,
    Vídeo = 2
}