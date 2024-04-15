import { useMemo } from 'react';

import {CountryGroup, Criteria, SummarizedResponse} from '../interfaces';

export const useSummarizedCriteria = (data: CountryGroup[]): { summary: SummarizedResponse } => {
    return useMemo(() => {
        const initialCriteria: Criteria = { inFlight: 0, preFlight: 0 };

        const summary: SummarizedResponse = {
            criteriaA: { ...initialCriteria },
            criteriaB: { ...initialCriteria },
            criteriaC: { ...initialCriteria },
            criteriaD: { ...initialCriteria }
        };

        data.forEach(obj => {
            summary.criteriaA.inFlight += obj.criteriaA.inFlight;
            summary.criteriaA.preFlight += obj.criteriaA.preFlight;
            summary.criteriaB.inFlight += obj.criteriaB.inFlight;
            summary.criteriaB.preFlight += obj.criteriaB.preFlight;
            summary.criteriaC.inFlight += obj.criteriaC.inFlight;
            summary.criteriaC.preFlight += obj.criteriaC.preFlight;
            summary.criteriaD.inFlight += obj.criteriaD.inFlight;
            summary.criteriaD.preFlight += obj.criteriaD.preFlight;
        });

        return {summary};
    }, [data]);
};
