import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharp'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M9 17H15V15H11V13H15V7H9V9H13V11H9ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialLooksTwoSharp;
