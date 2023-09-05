import is, { TIsType, IOptions as IIsOptions } from '@amaui/utils/is';
import isValid, { TIsValidType, IOptions as IIsValidOptions } from '@amaui/utils/isValid';
import { cleanValue, equalDeep, merge, stringify } from '@amaui/utils';
import { ValidationError } from '@amaui/errors';

export interface IValidateOptions {
  message?: string;
  uriDecode?: boolean;
  parse?: boolean;
}

export interface IValidateModelValueIs {
  type?: TIsType;
  options?: IIsOptions;
}

export interface IValidateModelValueIsValid {
  type?: TIsValidType;
  options?: IIsValidOptions;
}

export interface IValidateModelValueMethodOptions {
  form: IForm;
  property: string;
  object: IValidateModelValue;
  options: IValidateOptions;
}

export type IValidateModelValueMethod = (value: any, options: IValidateModelValueMethodOptions) => Promise<any> | any;

export interface IValidateModelValue {
  name: string;

  value?: any;

  message?: string;

  // validation
  required?: boolean;

  // is
  is?: TIsType | TIsType[] | IValidateModelValueIs | IValidateModelValueIs[];
  isValid?: TIsValidType | TIsValidType[] | IValidateModelValueIsValid | IValidateModelValueIsValid[];

  // of
  // ie. array of strings
  of?: TIsType | TIsType[] | IValidateModelValueIs | IValidateModelValueIs[];
  ofValid?: TIsValidType | TIsValidType[] | IValidateModelValueIsValid | IValidateModelValueIsValid[];

  // equal
  equal?: any;
  notEqual?: any;

  equalDeep?: any;
  notEqualDeep?: any;

  // some
  some?: any[];

  // in, every
  in?: any[];
  every?: any[];

  // properties
  properties?: string[];
  notProperties?: string[];

  // length
  min?: number;
  max?: number;
  // exact
  length?: number;

  // method
  method?: IValidateModelValueMethod | IValidateModelValueMethod[];

  touched?: boolean;

  error?: string;

  capitalize?: boolean;

  propertyNameUpdate?: (value: any) => string;
}

export type IUseFormValues = Record<string, IValidateModelValue>;

export interface IForm {
  value: any;
  values: IUseFormValues;
  valid: boolean;
}

export type IValidateValidation = (property: IValidateModelValue, form: IForm) => void | Error | Promise<void | Error>;

export type IValidateVales = Record<string, IValidateModelValue>;

export const onValidateError = (options: IValidateOptions, model: IValidateModelValue, message?: any) => {
  const error = new ValidationError(message);

  // Entire model message
  if (options.message !== undefined) error.message = options.message;
  // model item message
  else if (model.message !== undefined) error.message = model.message;

  // error
  throw error;
};

const validate = async (model: IValidateModelValue, property: string, form: IForm, options_?: IValidateOptions) => {
  const options = merge((options_ && is('object', options_)) ? options_ : {}, { uriDecode: true, parse: true });

  const name = cleanValue(model.name !== undefined ? model.name : property);

  const value = model.value;

  // value validate
  // with options above

  // required
  if (model.required) {
    const response = value;

    if (response === undefined) onValidateError(options, model, `${name} is required`);
  }

  // is
  const is_ = ((is('array', model.is) ? model.is : [model.is]) as IValidateModelValueIs[]).filter(Boolean);

  for (const item of is_) {
    const itemType = item?.type || item;
    const itemOptions = item?.options || undefined;

    const response = is(itemType as TIsType, value, itemOptions);

    if (!response) onValidateError(options, model, `${name} has to be a valid ${cleanValue(itemType as string)}`);
  }

  // is valid
  const isValid_ = ((is('array', model.isValid) ? model.isValid : [model.isValid]) as IValidateModelValueIsValid[]).filter(Boolean);

  for (const item of isValid_) {
    const itemType = item?.type || item;
    const itemOptions = item?.options || undefined;

    const response = isValid(itemType as TIsValidType, value, itemOptions);

    if (!response) onValidateError(options, model, `${name} has to be a valid ${cleanValue(itemType as string)}`);
  }

  // of
  const of_ = ((is('array', model.of) ? model.of : [model.of]) as IValidateModelValueIs[]).filter(Boolean);

  if (is('array', value)) {
    const response = value.every(valueItem => {
      return of_.some(item => {
        const itemType = item?.type || item;
        const itemOptions = item?.options || undefined;

        return is(itemType as any, valueItem, itemOptions);
      });
    });

    if (!response) onValidateError(options, model, `${name} items have to be one of ${of_.map(item => item?.type || item).join(', ')}`);
  }

  // ofValid
  const ofValid = ((is('array', model.ofValid) ? model.ofValid : [model.ofValid]) as IValidateModelValueIs[]).filter(Boolean);

  if (is('array', value)) {
    const response = value.every(valueItem => {
      return ofValid.some(item => {
        const itemType = item?.type || item;
        const itemOptions = item?.options || undefined;

        return isValid(itemType as any, valueItem, itemOptions);
      });
    });

    if (!response) onValidateError(options, model, `${name} items have to be one of valid ${ofValid.map(item => item?.type || item).join(', ')}`);
  }

  // equal
  if (model.equal !== undefined) {
    const response = value === model.equal;

    if (!response) onValidateError(options, model, `${name} has to be equal to ${stringify(model.equal)}`);
  }

  // not equal
  if (model.equal !== undefined) {
    const response = value !== model.equal;

    if (!response) onValidateError(options, model, `${name} has to not be equal to ${stringify(model.equal)}`);
  }

  // equal deep
  if (model.equalDeep !== undefined) {
    const response = equalDeep(value, model.equalDeep);

    if (!response) onValidateError(options, model, `${name} has to be equal to ${stringify(model.equalDeep)}`);
  }

  // not equal deep
  if (model.notEqualDeep !== undefined) {
    const response = !equalDeep(value, model.notEqualDeep);

    if (!response) onValidateError(options, model, `${name} has to not be equal to ${stringify(model.notEqualDeep)}`);
  }

  // some
  if (is('array', model.some)) {
    let response: boolean;

    if (is('string', value)) {
      response = !!model.some.find(item => equalDeep(value, item));

      if (!response) onValidateError(options, model, `${name} has to be one of ${model.some.map(item => stringify(item)).join(', ')}`);
    }
    else if (is('array', value)) {
      response = value.some(item => !!model.some.find(item_ => equalDeep(item, item_)));

      if (!response) onValidateError(options, model, `${name} has to include some of ${model.some.map(item => stringify(item)).join(', ')}`);
    }
  }

  // in
  // every
  const every = model.in || model.every;

  if (is('array', every)) {
    let response: boolean;

    if (is('string', value)) {
      response = !!every.find(item => equalDeep(value, item));

      if (!response) onValidateError(options, model, `${name} has to be one of ${every.map(item => stringify(item)).join(', ')}`);
    }
    else if (is('array', value)) {
      response = value.every(item => !!every.find(item_ => equalDeep(item, item_)));

      if (!response) onValidateError(options, model, `${name} has to include one of ${every.map(item => stringify(item)).join(', ')}`);
    }
  }

  // properties
  if (is('array', model.properties)) {
    const allowed = model.properties;

    const keys = Object.keys(value);

    const response = keys.every(item => allowed.includes(item));

    if (!response) onValidateError(options, model, `${name} allowed properties are ${allowed.join(', ')}`);
  }

  // not properties
  if (is('array', model.notProperties)) {
    const notAllowed = model.notProperties;

    const keys = Object.keys(value);

    const response = keys.every(item => !notAllowed.includes(item));

    if (!response) onValidateError(options, model, `${name} includes not allowed property. Not allowed properties are ${notAllowed.join(', ')}`);
  }

  // min
  // max
  // length
  if (
    ![undefined, null].includes(value) &&
    (
      is('number', model.min) ||
      is('number', model.max) ||
      is('number', model.length)
    )
  ) {
    let length: number = value as number;

    // object
    if (is('object', value)) length = Object.keys(value).length;
    // number
    else if (is('number', value)) length = value;
    // string, array, map, etc.
    else {
      length = value?.length !== undefined ? value?.length : value?.size;
    }

    if (is('number', model.min)) {
      const response = length >= model.min;

      if (!response) onValidateError(options, model, `${name} has to be minimum ${model.min}`);
    }

    if (is('number', model.max)) {
      const response = length <= model.max;

      if (!response) onValidateError(options, model, `${name} can be maximum ${model.max}`);
    }

    if (is('number', model.length)) {
      const response = length === model.length;

      if (!response) onValidateError(options, model, `${name} has to be exactly ${model.length} in length/size`);
    }
  }

  // method
  const methods = ((is('array', model.method) ? model.method : [model.method]) as IValidateModelValueMethod[]).filter(Boolean);

  for (const method_ of methods) {
    try {
      // either throw error or Promise.reject or return false
      const response = await method_(
        value,
        {
          form,
          object: model,
          property,
          options
        }
      );

      if (response !== undefined) {
        if (!response) throw new ValidationError(`${name} is invalid`);
      }
    }
    catch (error) {
      const messageValue = error?.message !== undefined ? error.message : error;

      onValidateError(options, model, messageValue);
    }
  }
};

export default validate;
