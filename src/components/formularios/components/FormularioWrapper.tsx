import { Formik, Form, FormikValues } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";



interface Props<T> {
    initialValues: T;
    validationSchema: Yup.AnyObjectSchema;
    onSubmit: (data: T) => void | Promise<void>;
    children: ReactNode;
}


export default function FormularioWrapper<T extends FormikValues>({
    initialValues,
    validationSchema,
    onSubmit,
    children
}: Props<T>) {



    return (
        <Formik<T>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            <Form className="space-y-4">

                {children}

            </Form>

        </Formik>
    )
}
