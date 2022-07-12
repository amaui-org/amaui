import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharp'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M7 13H17V11H7ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  )
});

export default IconMaterialIndeterminateCheckBoxSharp;
