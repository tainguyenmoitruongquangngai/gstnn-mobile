type RootStackParamList = {
    home: undefined;
    "review-detail": { id: number; title: string; star: number } | undefined;
    "custormer_info": { id: number;name:string, xa: string; huyen: string, sdt:number } | undefined;

    // Feed: { sort: 'latest' | 'top' } | undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

declare module "*.png"
