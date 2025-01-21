import * as Yup from 'yup';

export const wineSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    imageUrl: Yup.string().required("URL is required"),
    oldPrice: Yup.number().required("old price is required"),
    newPrice: Yup.number().required("new price is required"),
  });