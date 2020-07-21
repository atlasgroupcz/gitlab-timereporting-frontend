import React, { useMemo, createContext, FC, useContext } from 'react';
import { object, ref, ObjectSchema, date, number, array } from 'yup';
import { HierarchyType } from '../../types/HierarchyType';

type ExcelSchemaType = {
    from: Date;
    to: Date;
};

type CalendarReportSchemaType = {
    year: number;
    userId: number;
};

type HierarchyReportSchemaType = {
    from: Date;
    to: Date;
    hierarchy: HierarchyType[];
};

export interface ValidationSchemasContextState {
    ExcelSchema: ObjectSchema<object & ExcelSchemaType>;
    CalendarReportSchema: ObjectSchema<object & CalendarReportSchemaType>;
    HierarchyReportSchema: ObjectSchema<object & HierarchyReportSchemaType>;
}

type FieldType = keyof (ExcelSchemaType &
    CalendarReportSchemaType &
    HierarchyReportSchemaType);
type FieldRecord = Record<FieldType, string>;

const defaultValue: ValidationSchemasContextState = {
    ExcelSchema: object().shape({
        from: date().required(),
        to: date().required(),
    }),
    CalendarReportSchema: object().shape({
        year: number().required(),
        userId: number().required(),
    }),
    HierarchyReportSchema: object().shape({
        from: date().required(),
        to: date().required(),
        hierarchy: array(),
    }),
};

interface ContextProps {}

export const ValidationSchemas = createContext<ValidationSchemasContextState>(
    defaultValue
);

export const useValidationSchemas = () => useContext(ValidationSchemas);

export const ValidationSchemasProvider: FC<ContextProps> = ({ children }) => {
    const fields: FieldRecord = useMemo(
        () => ({
            from: 'From date',
            to: 'To date',
            year: 'Year',
            userId: 'User',
            hierarchy: 'Hierarchy',
        }),
        []
    );

    const validationMsgs = useMemo(
        () => ({
            required: 'is required',
            invalidDates: 'Dates are invalid',
        }),
        []
    );

    const validationSchemas = useMemo(
        (): ValidationSchemasContextState => ({
            ExcelSchema: object().shape({
                from: date().required(
                    `${fields.from} ${validationMsgs.required}`
                ),

                to: date()
                    .required(`${fields.to} ${validationMsgs.required}`)
                    .min(ref('from'), validationMsgs.invalidDates),
            }),
            CalendarReportSchema: object().shape({
                year: number().required(
                    `${fields.year} ${validationMsgs.required}`
                ),
                userId: number().required(
                    `${fields.userId} ${validationMsgs.required}`
                ),
            }),
            HierarchyReportSchema: object().shape({
                from: date().required(
                    `${fields.from} ${validationMsgs.required}`
                ),
                to: date().required(`${fields.to} ${validationMsgs.required}`),
                hierarchy: array(),
            }),
        }),
        [validationMsgs, fields]
    );

    return (
        <ValidationSchemas.Provider value={validationSchemas}>
            {children}
        </ValidationSchemas.Provider>
    );
};
