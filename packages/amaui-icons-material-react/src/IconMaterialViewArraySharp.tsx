import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArraySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArraySharp'
      short_name='ViewArray'

      {...props}
    >
      <path d="M9 7V17ZM18 19V5H21V19ZM7 19V5H17V19ZM3 19V5H6V19ZM9 17H15V7H9Z"/>
    </Icon>
  )
});

export default IconMaterialViewArraySharp;
