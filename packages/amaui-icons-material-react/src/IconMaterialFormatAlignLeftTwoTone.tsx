import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftTwoTone'
      short_name='FormatAlignLeft'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z"/>
    </Icon>
  );
});

export default IconMaterialFormatAlignLeftTwoTone;
