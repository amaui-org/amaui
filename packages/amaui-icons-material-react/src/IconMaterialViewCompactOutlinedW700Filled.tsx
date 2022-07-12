import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactOutlinedW700Filled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M1.15 11V3.15H22.85V11ZM10.075 20.85V13H22.85V20.85ZM1.15 20.85V13H8.075V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialViewCompactOutlinedW700Filled;
