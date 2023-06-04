import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecrease'

      short_name='FormatIndentDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecrease.displayName = 'AmauiIconMaterialFormatIndentDecrease';

export default IconMaterialFormatIndentDecrease;
