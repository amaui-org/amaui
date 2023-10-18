import React from 'react';

import { capitalize, copy, is, setObjectValue } from '@amaui/utils';
import { ValidationError } from '@amaui/errors';

import validateModel, { IValidateVales } from './validate';

export interface IUseForm {
  values: IValidateVales;

  validate?: (values: IValidateVales, form: any) => boolean;

  autoValidate?: boolean;

  valueDefault?: any;
  validDefault?: boolean;
}

const useForm = (props: IUseForm) => {
  const {
    values: values_ = {},

    validate: validate_,

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

  const init = React.useCallback(() => {
    const formNew = { ...refs.form.current };

    const {
      values
    } = formNew;

    const value = {};

    const properties = Object.keys(values);

    properties.forEach(item => {
      const valueProperty = values[item];

      if (valueProperty?.value !== undefined) {
        setObjectValue(value, item, copy(valueProperty.value));
      }
    });

    // update
    setForm(previous => {

      return {
        ...previous,

        value
      };
    });
  }, []);

  React.useEffect(() => {
    // init
    init();
  }, []);

  const onChange = React.useCallback(async (...args: [Array<[string, any, any?]>] | [string, any, any?]) => {
    const formNew = { ...refs.form.current };

    const {
      values
    } = formNew;

    const value = {};

    const valuesArgs = is('array', args[0]) ? args[0] : [args];

    for (const arg of valuesArgs) {
      const [property_, value_, propertyNested] = arg;

      let property = values[property_];

      if (!property) {
        values[property_] = {
          name: (propertyNested || property_)?.split('.')?.slice(-1)[0],
          touched: true
        };

        property = values[property_];
      }

      if (!propertyNested) property.value = value_;
      else setObjectValue(property.value, propertyNested, value_);

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

    let valid = autoValidate ? properties.every((item: string) => {
      const prop = values[item];

      return (
        !prop.error &&
        (
          !prop.required ||
          prop.value
        )
      );
    }) : formNew.valid;

    if (autoValidate && is('function', validate_)) valid = valid && validate_(values, formNew);

    properties.forEach(item => {
      const valueProperty = values[item];

      if (valueProperty?.value !== undefined) {
        setObjectValue(value, item, copy(valueProperty.value));
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
  }, [autoValidate, validate_]);

  const validate = React.useCallback(async () => {
    const formNew = { ...refs.form.current };

    const {
      values,
    } = formNew;

    const properties = Object.keys(values);

    for (const item of properties) {
      const property = values[item];

      // Validate the property
      if (property.required && property.value === undefined) {
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

    let valid = properties.every((item: string) => {
      const prop = values[item];

      return (
        !prop.error &&
        (
          !prop.required ||
          prop.value !== undefined
        )
      );
    });

    if (is('function', validate_)) valid = valid && validate_(values, formNew);

    // update
    setForm(previous => {

      return {
        ...previous,
        values,
        valid
      };
    });

    return valid;
  }, [validate_]);

  const clear = React.useCallback(() => {
    const formNew = { ...refs.form.current };

    const values = {};

    const keys = Object.keys(formNew.values);

    keys.forEach(item => {
      const property = formNew.values[item];

      values[item] = {
        ...property,

        value: undefined,
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

    init,
    validate,
    onChange,
    clear,

    updateForm: setForm
  };
};

export default useForm;
