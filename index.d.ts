interface Vars {
    [key: string]: string;
}
export default function generateVars(vars?: Vars): {
    '@primary-color': string;
    '@info-color': string;
    '@success-color': string;
    '@processing-color': string;
    '@error-color': string;
    '@highlight-color': string;
    '@warning-color': string;
    '@border-radius-base': string;
    '@height-base': string;
};
export {};
