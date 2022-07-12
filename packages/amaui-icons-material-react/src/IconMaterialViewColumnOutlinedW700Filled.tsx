import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnOutlinedW700Filled'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M16.3 19.85V4.15H22.15V19.85ZM9.075 19.85V4.15H14.925V19.85ZM1.85 19.85V4.15H7.7V19.85Z"/>
    </Icon>
  )
});

export default IconMaterialViewColumnOutlinedW700Filled;
