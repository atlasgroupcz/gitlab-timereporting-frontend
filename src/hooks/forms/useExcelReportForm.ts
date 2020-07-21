import { useValidationSchemas } from '../../context/ValidationSchemas';
import { useFormik } from 'formik';
import { schemaToInitialValues } from '../../utils/schemaToInitialValues';
import { useExcelReport } from '../api/useExcelReport';
import { formatDate } from '../../utils/formatDate';

export const useExcelReportForm = () => {
    const { ExcelSchema } = useValidationSchemas();
    const getExcelReport = useExcelReport();

    const form = useFormik({
        initialValues: schemaToInitialValues(ExcelSchema)(),
        validationSchema: ExcelSchema,
        validateOnChange: false,
        onSubmit: ({ from, to }, { setSubmitting }) => {
            setSubmitting(true);
            console.log(from);

            getExcelReport(formatDate(from), formatDate(to));
            setSubmitting(false);
        },
    });
    return [form] as const;
};
