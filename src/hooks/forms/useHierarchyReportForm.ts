import { useValidationSchemas } from '../../context/ValidationSchemas';
import { useFormik } from 'formik';
import { schemaToInitialValues } from '../../utils/schemaToInitialValues';
import { useHierarchyReport } from '../api/useHierarchyReport';

export const useHierarchyReportForm = () => {
    const { HierarchyReportSchema } = useValidationSchemas();
    const [getHierarchyReport, result] = useHierarchyReport();

    const form = useFormik({
        initialValues: schemaToInitialValues(HierarchyReportSchema)({
            hierarchy: [],
        }),
        validationSchema: HierarchyReportSchema,
        validateOnChange: false,
        onSubmit: async (
            { from, to, hierarchy },
            { setSubmitting, setStatus }
        ) => {
            setSubmitting(true);
            setStatus(null);
            const { errors } = await getHierarchyReport(from, to, hierarchy);
            errors && setStatus('Something went wrong');
            setSubmitting(false);
        },
    });
    return [form, result] as const;
};
