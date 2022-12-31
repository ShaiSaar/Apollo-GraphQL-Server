export enum WorkStatus {
    Working = 'Working',
    OnVacation = 'OnVacation',
    LunchTime = 'LunchTime',
    BusinessTrip = 'BusinessTrip',
}

export interface User {
    _id?: string;
    name: string;
    workStatus: WorkStatus;
    img?: string;
}

export interface UserInput {
    name: string;
    workStatus: WorkStatus;
    img?: string;
}