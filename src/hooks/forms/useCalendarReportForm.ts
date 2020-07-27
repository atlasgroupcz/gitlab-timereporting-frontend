import { useValidationSchemas } from '../../context/ValidationSchemas';
import { useCalendarReport } from '../api/useCalendarReport';
import { useFormik } from 'formik';
import { schemaToInitialValues } from '../../utils/schemaToInitialValues';

export const useCalendarReportForm = () => {
    const { CalendarReportSchema } = useValidationSchemas();
    const [getCalendarReport, result] = useCalendarReport();

    const form = useFormik({
        initialValues: schemaToInitialValues(CalendarReportSchema)(),
        validationSchema: CalendarReportSchema,
        validateOnChange: false,
        onSubmit: async ({ userId, year }, { setSubmitting, setStatus }) => {
            setSubmitting(true);
            setStatus(null);
            const { errors } = await getCalendarReport(year, userId);
            errors && setStatus('Something went wrong');
            setSubmitting(false);
        },
    });
    return [form, result] as const;
};
