import { useMemo } from 'react';

import {CountryGroup, Criteria, DataObj, GroupedData} from '../interfaces';

export const useGroupedDataForGrid = (data: DataObj[]): { rows: (CountryGroup)[] } => {
    return useMemo(() => {
        const groupedData: GroupedData = data.reduce<GroupedData>((acc, obj) => {
            const key = obj.country;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push({
                id: obj.id,
                state: obj.state,
                criteriaA: obj.criteriaA,
                criteriaB: obj.criteriaB,
                criteriaC: obj.criteriaC,
                criteriaD: obj.criteriaD
            });
            return acc;
        }, {});

        const rowsForDataGrid: (CountryGroup)[] = [];
        Object.keys(groupedData).forEach((country, index) => {
            const countryId = `country-${index}`;

            // Initialize criteria sums
            const initialCriteria: Criteria = { inFlight: 0, preFlight: 0 };
            const criteriaA = { ...initialCriteria };
            const criteriaB = { ...initialCriteria };
            const criteriaC = { ...initialCriteria };
            const criteriaD = { ...initialCriteria };

            // Calculate sums of criteria
            groupedData[country].forEach(state => {
                criteriaA.inFlight += state.criteriaA.inFlight;
                criteriaA.preFlight += state.criteriaA.preFlight;
                criteriaB.inFlight += state.criteriaB.inFlight;
                criteriaB.preFlight += state.criteriaB.preFlight;
                criteriaC.inFlight += state.criteriaC.inFlight;
                criteriaC.preFlight += state.criteriaC.preFlight;
                criteriaD.inFlight += state.criteriaD.inFlight;
                criteriaD.preFlight += state.criteriaD.preFlight;
            });

            // Create the country group entry
            rowsForDataGrid.push({
                id: countryId,
                country,
                states: groupedData[country],
                criteriaA,
                criteriaB,
                criteriaC,
                criteriaD
            });
        });

        return { rows: rowsForDataGrid };
    }, [data]);
};
