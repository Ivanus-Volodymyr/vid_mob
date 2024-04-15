export interface Criteria {
    inFlight: number;
    preFlight: number;
}

export interface DataObj {
    id: number;
    country: string;
    state: string;
    criteriaA: Criteria;
    criteriaB: Criteria;
    criteriaC: Criteria;
    criteriaD: Criteria;
}

export interface StateData extends Omit<DataObj, 'country'> {}

export interface CountryGroup {
    id: string;
    country: string;
    states: StateData[];
    criteriaA: Criteria;
    criteriaB: Criteria;
    criteriaC: Criteria;
    criteriaD: Criteria;
}

export type GroupedData = {
    [country: string]: StateData[];
};

export interface SummarizedResponse {
    criteriaA: Criteria;
    criteriaB: Criteria;
    criteriaC: Criteria;
    criteriaD: Criteria;
}
