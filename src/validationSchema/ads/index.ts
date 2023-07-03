import * as yup from 'yup';

export const adValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
