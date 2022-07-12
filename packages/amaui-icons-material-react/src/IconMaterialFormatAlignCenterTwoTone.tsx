import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterTwoTone'
      short_name='FormatAlignCenter'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z"/>
    </Icon>
  )
});

export default IconMaterialFormatAlignCenterTwoTone;
