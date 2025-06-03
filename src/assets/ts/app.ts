export interface IApp {
    appName: string;
    appIcon: string;
    componentName: any;
    openWindow: boolean;
    inDesktop: boolean;
    isProgram: boolean;
    notepadContent?: string;
    recycleBinContent?: IRecycleBin[];
}
export interface IRecycleBin {
    name: string;
    originalLocation: string;
    deletedDate: string;
    description: string;
    size: string;
}

export let initRecycleBin = (): IRecycleBin[] => {
    return [
        {
            name: "i dont care bich", originalLocation: "nowhere", deletedDate: "2025", description: "shit data", size: "19,643kb"
        },
        {
            name: "react.js", originalLocation: "react.js", deletedDate: "2013", description: "literal human garbage", size: "84,5mb"
        },
        {
            name: "next.js", originalLocation: "fucked with it a lot", deletedDate: "2025", description: "just fried my mind with it a lot.", size: "80mb"
        }
    ]
}