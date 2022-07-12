import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideOutlined'
      short_name='Hide'

      {...props}
    >
      <path d="M13 11V5H15V7.6L19.575 3L21 4.425L16.4 9H19V11ZM4.425 21 3 19.575 7.6 15H5V13H11V19H9V16.4Z"/>
    </Icon>
  )
});

export default IconMaterialHideOutlined;
