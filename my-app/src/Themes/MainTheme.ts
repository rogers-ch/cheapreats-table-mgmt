import Template, { ThemeTemplateInterface } from './ThemeTemplate';

export interface MainThemeInterface extends ThemeTemplateInterface {
    colors: {
        primary: string;
        text: string;
        input: {
            default: string;
            success: string;
            error: string;
        };
        statusColors: {
            green: string;
            orange: string;
            red: string;
        };
        background: string;
        border: string;
        occupancyStatusColors: {
            Vacant: string;
            Reserved: string;
            Occupied: string;
        };
        chairTableBackground: string;
        chairOccupiedBackground: string;
    };
}

export const MainTheme: MainThemeInterface = {
    ...Template,
    colors: {
        primary: '#EE2434',
        text: '#4a4a4a',
        input: {
            default: '#f5f5f5',
            success: '#f5fff5',
            error: '#fff5f5',
        },
        statusColors: {
            green: '#28af00',
            orange: '#f98300',
            red: '#ee2434',
        },
        background: '#ffffff',
        border: 'rgba(0,0,0,0.1)',
        occupancyStatusColors: {
            Vacant: '#28a745',
            Reserved: '#ffc107',
            Occupied: '#17a2b8',
        },
        chairTableBackground: '#6c757d',
        chairOccupiedBackground: 'red',
    },
};
