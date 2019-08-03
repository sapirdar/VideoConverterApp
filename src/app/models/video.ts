import { Thumbnail } from './thumbnail';
export class Video {
    id: number;
    name: string;
    videoFolderPath: string;
    hdFilePath: string;
    hlsFilePath: string;
    dateTime: Date;
    thumbnails: Thumbnail[];
}

