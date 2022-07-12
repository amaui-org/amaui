import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectOutlinedW700Filled'
      short_name='Eject'

      {...props}
    >
      <path d="M3.775 15 12 2.625 20.225 15ZM3.85 20.15V17H20.15V20.15Z"/>
    </Icon>
  )
});

export default IconMaterialEjectOutlinedW700Filled;
