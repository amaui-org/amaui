import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingSharp'
      short_name='Padding'

      {...props}
    >
      <path d="M7 9H9V7H7ZM11 9H13V7H11ZM15 9H17V7H15ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialPaddingSharp;
