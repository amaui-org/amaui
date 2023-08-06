import React from 'react';

import is from '@amaui/utils/is';
import capitalize from '@amaui/utils/capitalize';
import setObjectValue from '@amaui/utils/setObjectValue';
import { ValidationError } from '@amaui/errors';

export interface IUseFormValuesProperty {
  property: string;
  value?: string;
  validation?: IUseFormValidation | IUseFormValidation[];
  touched?: boolean;
  error?: string;
  required?: boolean;
  capitalize?: boolean;
  propertyNameUpdate?: (value: any) => string;
}

export type IUseFormValues = Record<string, IUseFormValuesProperty>;

export interface IForm {
  value: any;
  values: IUseFormValues;
  valid: boolean;
}

export type IUseFormValidation = (property: IUseFormValuesProperty, form: IForm) => void | Error | Promise<void | Error>;

export interface IUseForm {
  values: Record<string, IUseFormValuesProperty>;

  autoValidate?: boolean;

  valueDefault?: any;
  validDefault?: boolean;
}

const useForm = (props: IUseForm) => {
  const {
    values: values_ = {},

    autoValidate,

    valueDefault,
    validDefault
  } = props;

  const [form, setForm] = React.useState({
    value: valueDefault !== undefined ? valueDefault : {},
    values: values_ || {},
    valid: validDefault !== undefined ? validDefault : false
  });

  const refs = {
    form: React.useRef(form)
  };

  refs.form.current = form;

  const onChange = React.useCallback(async (property_: string, value_: any) => {
    const formNew = { ...refs.form.current };

    const {
      value,
      values
    } = formNew;

    const property = values[property_];

    if (!property) {
      values[property_] = {
        property: property_,
        value: value_,
        touched: true
      };
    }
    else {
      property.value = value_;
      property.touched = true;

      if (autoValidate) {
        // Validate the property
        if (property.required && !property.value) {
          const name = is('function', property.propertyNameUpdate) ? property.propertyNameUpdate(property.property!) : property.capitalize !== false ? capitalize(property.property!) : property.property!;

          property.error = `${name} is required`;
        }
        else {
          property.error = undefined;

          // validations
          const validations = (is('array', property.validation) ? property.validation! : [property.validation] as any).filter(Boolean);

          for (const validation of validations) {
            try {
              await validation(property, formNew);
            }
            catch (error) {
              property.error = (error as ValidationError).message;
            }
          }
        }
      }
    }

    const properties = Object.keys(values);

    const valid = autoValidate ? properties.every((item: string) => {
      const prop = values[item];

      return (
        !prop.error &&
        (
          !prop.required ||
          prop.value
        )
      );
    }) : formNew.valid;

    properties.forEach(item => {
      const valueProperty = values[item];

      if (valueProperty?.value !== undefined) {
        setObjectValue(value, item, valueProperty.value);
      }
    });

    // update
    setForm(previous => {

      return {
        ...previous,
        value,
        values,
        valid
      };
    });
  }, [autoValidate]);

  const validate = React.useCallback(async () => {
    const formNew = { ...refs.form.current };

    const {
      value,
      values
    } = formNew;

    const properties = Object.keys(values);

    for (const item of properties) {
      const property = values[item];

      // Validate the property
      if (property.required && !property.value) {
        const name = is('function', property.propertyNameUpdate) ? property.propertyNameUpdate(property.property!) : property.capitalize !== false ? capitalize(property.property!) : property.property!;

        property.error = `${name} is required`;
      }
      else {
        property.error = undefined;

        // validations
        const validations = (is('array', property.validation) ? property.validation! : [property.validation] as any).filter(Boolean);

        for (const validation of validations) {
          try {
            await validation(property, formNew);

            property.error = undefined;
          }
          catch (error) {
            property.error = (error as ValidationError).message;
          }
        }
      }
    }

    const valid = properties.every((item: string) => {
      const prop = values[item];

      return (
        !prop.error &&
        (
          !prop.required ||
          prop.value
        )
      );
    });

    // update
    setForm(previous => {

      return {
        ...previous,
        values,
        valid
      };
    });

    return valid;
  }, []);

  const clear = React.useCallback(() => {
    const formNew = { ...refs.form.current };

    const values = {};

    const keys = Object.keys(formNew.values);

    keys.forEach(item => {
      const property = formNew.values[item];

      values[item] = {
        ...property,

        value: '',
        touched: false,
        error: ''
      };
    });

    // update
    setForm(previous => {

      return {
        ...previous,
        value: valueDefault !== undefined ? valueDefault : {},
        values,
        valid: validDefault !== undefined ? validDefault : false
      };
    });
  }, [valueDefault, validDefault]);

  return {
    ...form,

    clear,
    validate,
    onChange
  };
};

export default useForm;
