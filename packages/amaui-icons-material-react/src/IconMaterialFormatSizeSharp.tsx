import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeSharp'
      short_name='FormatSize'

      {...props}
    >
      <path d="M14 20V7H9V4H22V7H17V20ZM5 20V12H2V9H11V12H8V20Z"/>
    </Icon>
  );
});

export default IconMaterialFormatSizeSharp;
