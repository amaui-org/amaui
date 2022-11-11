import React from 'react';

import hash from '@amaui/utils/hash';
import merge from '@amaui/utils/merge';

import { inline as amauiInlineMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/inline';

import { TValue } from './style';
import { useAmauiStyle, useAmauiTheme } from '.';

export default function inline(value_: TValue, props?: any, options_: IOptions = { response: 'json' }) {
  const [value, setValue] = React.useState(undefined);

  const amauiStyle = useAmauiStyle();
  const amauiTheme = useAmauiTheme();

  const update = (update_ = true) => {
    const options = merge(options_, { amaui_style: { value: amauiStyle }, amaui_theme: { value: amauiTheme } }, { copy: true });

    // Options response value
    options.response = 'json';

    const valueNew = amauiInlineMethod(value_ as any, props, options);

    if (update_) setValue(valueNew as Record<string, any>);

    return valueNew;
  };

  // Update
  React.useEffect(() => {
    update();

    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(update);

    // Clean up
    return () => {
      // Unsubscribe
      if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(update);
    };
  }, []);

  // Update props
  React.useEffect(() => {
    update();
  }, [hash(props)]);

  // Important for ssr value
  const value__ = value || update(false);

  return value__;
}
