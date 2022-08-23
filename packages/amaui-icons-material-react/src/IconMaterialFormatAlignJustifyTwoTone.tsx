import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustifyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyTwoTone'
      short_name='FormatAlignJustify'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyTwoTone.displayName = 'AmauiIconMaterialFormatAlignJustifyTwoTone';

export default IconMaterialFormatAlignJustifyTwoTone;
