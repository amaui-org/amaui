import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseOutlined'
      short_name='Pause'

      {...props}
    >
      <path d="M14 19V5H18V19ZM6 19V5H10V19Z"/>
    </Icon>
  )
});

export default IconMaterialPauseOutlined;
