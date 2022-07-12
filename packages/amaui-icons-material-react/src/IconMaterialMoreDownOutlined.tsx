import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownOutlined'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5 19V8h2v9h9v2Zm5-5V3h2v9h9v2Z"/>
    </Icon>
  )
});

export default IconMaterialMoreDownOutlined;
