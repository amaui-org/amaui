import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecreaseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseTwoTone'
      short_name='FormatIndentDecrease'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z"/>
    </Icon>
  );
});

export default IconMaterialFormatIndentDecreaseTwoTone;
