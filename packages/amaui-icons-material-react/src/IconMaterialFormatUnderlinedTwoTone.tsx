import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedTwoTone'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 19h14v2H5zM6 3v8c0 3.31 2.69 6 6 6s6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6z"/>
    </Icon>
  );
});

export default IconMaterialFormatUnderlinedTwoTone;
