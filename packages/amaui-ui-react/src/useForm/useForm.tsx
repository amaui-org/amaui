import React from 'react';

import { capitalize, copy, is, setObjectValue } from '@amaui/utils';
import { ValidationError } from '@amaui/errors';

import validateModel, { IValidateVales } from './validate';

export interface IUseForm {
  values: IValidateVales;

  validate?: (values: IValidateVales, form: any) => boolean;

  rerenderOnUpdate?: boolean;
  autoValidate?: boolean;

  valueDefault?: any;
  validDefault?: boolean;
}

export interface IUseFormOnChangeOptions {
  rerenderOnUpdate?: boolean;
}

const useForm = (props: IUseForm) => {
  const {
    values: values_ = {},

    validate: validate_,

    rerenderOnUpdate = true,

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
    form: React.useRef(form),
    value: React.useRef(copy(valueDefault !== undefined ? valueDefault : {})),
    values: React.useRef(copy(values_ || {})),
    valid: React.useRef(validDefault !== undefined ? validDefault : false)
  };

  refs.form.current = form;

  const init = () => {
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
    refs.value.current = value;

    setForm(previous => {

      return {
        ...previous,

        value
      };
    });
  };

  React.useEffect(() => {
    // init
    init();
  }, []);

  const onChange = async (...args: [Array<[string, any, any?, IUseFormOnChangeOptions?]>] | [string, any, any?, IUseFormOnChangeOptions?]) => {
    const formNew = { ...refs.form.current };

    const value = {};

    const valuesArgs = is('array', args[0]) ? args[0] : [args];

    const options = (valuesArgs[0][3] || {}) as IUseFormOnChangeOptions;

    const rerenderOnUpdate_ = options.rerenderOnUpdate !== undefined ? options.rerenderOnUpdate : rerenderOnUpdate;

    const values = refs.values.current;

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
    }) : refs.valid.current;

    if (autoValidate && is('function', validate_)) valid = valid && validate_(values, formNew);

    properties.forEach(item => {
      const valueProperty = values[item];

      if (valueProperty?.value !== undefined) {
        setObjectValue(value, item, copy(valueProperty.value));
      }
    });

    // update
    refs.value.current = value;
    refs.values.current = values;
    refs.valid.current = valid;

    if (rerenderOnUpdate_) {
      setForm(previous => {

        return {
          ...previous,

          value,
          values,
          valid
        };
      });
    }
  };

  const validate = async () => {
    const formNew = { ...refs.form.current };

    const values = refs.values.current;

    const value = {};

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

    // value
    properties.forEach(item => {
      const valueProperty = values[item];

      if (valueProperty?.value !== undefined) {
        setObjectValue(value, item, copy(valueProperty.value));
      }
    });

    // update
    refs.value.current = value;
    refs.values.current = values;
    refs.valid.current = valid;

    setForm(previous => {

      return {
        ...previous,

        value,
        values,
        valid
      };
    });

    return valid;
  };

  const clear = () => {
    const formNew = {
      ...refs.form.current,

      value: copy(valueDefault !== undefined ? valueDefault : {}),
      values: values_ || {},
      valid: validDefault !== undefined ? validDefault : false
    };

    // update
    refs.value.current = formNew.value;
    refs.values.current = formNew.values;
    refs.valid.current = formNew.valid;

    setForm(previous => {

      return {
        ...previous,

        ...formNew
      };
    });
  };

  return {
    ...form,

    value: rerenderOnUpdate ? form.value : refs.value.current,
    values: rerenderOnUpdate ? form.values : refs.values.current,
    valid: rerenderOnUpdate ? form.valid : refs.valid.current,

    init,
    validate,
    onChange,
    clear,

    updateForm: setForm
  };
};

export default useForm;
