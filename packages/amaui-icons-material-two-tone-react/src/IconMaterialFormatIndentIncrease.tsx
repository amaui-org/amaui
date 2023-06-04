import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncrease'

      short_name='FormatIndentIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncrease.displayName = 'AmauiIconMaterialFormatIndentIncrease';

export default IconMaterialFormatIndentIncrease;
