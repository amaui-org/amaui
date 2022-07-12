import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopOutlined'
      short_name='AlignVerticalTop'

      {...props}
    >
      <path d="M2 4V2H22V4ZM7 22V6H10V22ZM14 16V6H17V16Z"/>
    </Icon>
  )
});

export default IconMaterialAlignVerticalTopOutlined;
