import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeOutlined'
      short_name='NearMe'

      {...props}
    >
      <path d="M12.9 21 10.05 13.95 3 11.1V9.7L21 3L14.3 21ZM13.55 17.3 17.6 6.4 6.7 10.45 11.6 12.4ZM11.6 12.4Z"/>
    </Icon>
  )
});

export default IconMaterialNearMeOutlined;
