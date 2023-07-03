import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  ad_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
