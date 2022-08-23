import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughTwoTone'
      short_name='FormatStrikethrough'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughTwoTone.displayName = 'AmauiIconMaterialFormatStrikethroughTwoTone';

export default IconMaterialFormatStrikethroughTwoTone;
