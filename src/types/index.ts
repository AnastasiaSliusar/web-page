export type LinkProp = {
    [key: string]: string
}

export type ListItemProps = {
    url: string
    textBlock?: {
        title:string
        body: string
    },
    id?: number
};

export type CardItemProp = {
    text: string
    link: string,
    textLink: string,
    id?: number,
    activeItem: boolean
};

type Company = {
    url: string
    id: number
};

export type ListCompany = Array<Company>;

export type ListWhy = Array<ListItemProps>;

export default {};
