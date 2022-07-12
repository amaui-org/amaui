import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataOutlined'
      short_name='HPlusMobiledata'

      {...props}
    >
      <path d="M4 17V7H6V11H12V7H14V17H12V13H6V17ZM18 15V13H16V11H18V9H20V11H22V13H20V15Z"/>
    </Icon>
  )
});

export default IconMaterialHPlusMobiledataOutlined;
