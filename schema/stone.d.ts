declare namespace stone {
    export interface Controller {
        LayoutID: string;
        FriendlyName: string;
        Platforms: string[];
        Layout: {
        };
    }
    export interface Platform {
        PlatformID: string;
        Metadata: {
        };
        MaximumInputs: number;
        FriendlyName: string;
        FileExtensions: string[];
    }
}

