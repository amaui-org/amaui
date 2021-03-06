import castParam from '@amaui/utils/castParam';

export const getAttributeValues = (value: HTMLElement) => {
  const values = {};

  if (value) {
    const attributes = value.getAttributeNames();

    attributes.forEach(item => values[item] = castParam(value.getAttribute(item)));
  }

  return values;
};
