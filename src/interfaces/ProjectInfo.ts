export interface ProjectInfoInterface {
    routeName: string;
    title: string;
    company: string;
    paragraphs: string[];
    linkInfo?: { link: string, content: string };
    techs: string[];
    images: string[];
}
