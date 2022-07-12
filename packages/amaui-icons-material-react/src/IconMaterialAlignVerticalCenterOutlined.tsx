import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterOutlined'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <path d="M7 21V13H2V11H7V3H10V11H14V6H17V11H22V13H17V18H14V13H10V21Z"/>
    </Icon>
  )
});

export default IconMaterialAlignVerticalCenterOutlined;
