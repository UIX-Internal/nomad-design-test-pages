
interface IHomeIntro {
    image: string
    video: string
}
interface IHomeContents {
    mainThumbnail: string
    mainTitle?: string
    mainDescription?: string
    worker: string
    workThumbnail: string[]
    workTitle: string[]
    workDescription: string[]
}
interface IIntroSpace {
    index: number;
    dir: string; //right or left
    workerData: IHomeContents;
}

export type {
    IHomeIntro,
    IHomeContents,
    IIntroSpace
};
