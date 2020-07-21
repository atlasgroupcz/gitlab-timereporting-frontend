import moment from 'moment';
import { API_DATE_FORMAT } from '../Config';

export const formatDate = (date: Date, format = API_DATE_FORMAT) =>
    moment(date).format(format);
