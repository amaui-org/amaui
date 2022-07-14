import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxSharp'
      short_name='AddBox'

      {...props}
    >
      <path d="M11 17H13V13H17V11H13V7H11V11H7V13H11ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialAddBoxSharp;
