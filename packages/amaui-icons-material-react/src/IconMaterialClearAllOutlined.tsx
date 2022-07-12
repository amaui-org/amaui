import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllOutlined'
      short_name='ClearAll'

      {...props}
    >
      <path d="M5 13V11H19V13ZM3 17V15H17V17ZM7 9V7H21V9Z"/>
    </Icon>
  )
});

export default IconMaterialClearAllOutlined;
