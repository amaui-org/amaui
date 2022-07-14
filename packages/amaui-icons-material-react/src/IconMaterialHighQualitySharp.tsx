import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighQualitySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualitySharp'
      short_name='HighQuality'

      {...props}
    >
      <path d="M6 15H7.5V13H9.5V15H11V9H9.5V11.5H7.5V9H6ZM14.75 16.5H16.25V15H18V9H13V15H14.75ZM14.5 13.5V10.5H16.5V13.5ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialHighQualitySharp;
