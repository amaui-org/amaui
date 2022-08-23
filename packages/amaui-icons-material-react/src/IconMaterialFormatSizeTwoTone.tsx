import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeTwoTone'
      short_name='FormatSize'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"/>
    </Icon>
  );
});

IconMaterialFormatSizeTwoTone.displayName = 'AmauiIconMaterialFormatSizeTwoTone';

export default IconMaterialFormatSizeTwoTone;
