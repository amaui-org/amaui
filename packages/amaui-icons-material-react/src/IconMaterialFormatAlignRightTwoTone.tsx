import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightTwoTone'
      short_name='FormatAlignRight'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightTwoTone.displayName = 'AmauiIconMaterialFormatAlignRightTwoTone';

export default IconMaterialFormatAlignRightTwoTone;
