import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnOutlined'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M3 19V5H20.975V19ZM5 17H8.325V7H5ZM10.325 17H13.65V7H10.325ZM15.65 17H18.975V7H15.65Z"/>
    </Icon>
  )
});

export default IconMaterialViewColumnOutlined;
