import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffOutlined'
      short_name='CodeOff'

      {...props}
    >
      <path d="M19.775 22.625 7 9.85 4.825 12.025 9.4 16.6 8 18 2 12 5.575 8.425 1.375 4.225 2.8 2.8 21.2 21.2ZM18.425 15.575 17 14.15 19.175 11.975 14.6 7.4 16 6 22 12Z"/>
    </Icon>
  )
});

export default IconMaterialCodeOffOutlined;
