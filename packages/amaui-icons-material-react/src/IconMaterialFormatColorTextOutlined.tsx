import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorTextOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextOutlined'
      short_name='FormatColorText'

      {...props}
    >
      <path d="M2 21V17H22V21ZM5.5 14 10.75 0H13.25L18.5 14H16.1L14.85 10.4H9.2L7.9 14ZM9.9 8.4H14.1L12.05 2.6H11.95Z"/>
    </Icon>
  )
});

export default IconMaterialFormatColorTextOutlined;
