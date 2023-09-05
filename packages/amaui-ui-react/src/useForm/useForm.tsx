import React from 'react';

import is from '@amaui/utils/is';
import capitalize from '@amaui/utils/capitalize';
import setObjectValue from '@amaui/utils/setObjectValue';
import { ValidationError } from '@amaui/errors';

import validateModel, { IValidateVales } from './validate';

export interface IUseForm {
  values: IValidateVales;

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
        name: property_,
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
          const name = is('function', property.propertyNameUpdate) ? property.propertyNameUpdate(property.name!) : property.capitalize !== false ? capitalize(property.name!) : property.name!;

          property.error = `${name} is required`;
        }
        else {
          property.error = undefined;

          // validations
          try {
            await validateModel(property, property_, formNew);
          }
          catch (error) {
            property.error = (error as ValidationError).message;
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
        const name = is('function', property.propertyNameUpdate) ? property.propertyNameUpdate(property.name!) : property.capitalize !== false ? capitalize(property.name!) : property.name!;

        property.error = `${name} is required`;
      }
      else {
        property.error = undefined;

        // validations
        try {
          await validateModel(property, item, formNew);

          property.error = undefined;
        }
        catch (error) {
          property.error = (error as ValidationError).message;
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
