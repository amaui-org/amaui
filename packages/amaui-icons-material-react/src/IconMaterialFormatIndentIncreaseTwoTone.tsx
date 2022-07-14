import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncreaseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncreaseTwoTone'
      short_name='FormatIndentIncrease'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"/>
    </Icon>
  );
});

export default IconMaterialFormatIndentIncreaseTwoTone;
