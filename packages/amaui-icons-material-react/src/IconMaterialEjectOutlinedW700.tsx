import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectOutlinedW700'
      short_name='Eject'

      {...props}
    >
      <path d="M3.85 20.15V17H20.15V20.15ZM3.775 15 12 2.625 20.225 15ZM12 11.85ZM9.625 11.85H14.375L12 8.3Z"/>
    </Icon>
  )
});

export default IconMaterialEjectOutlinedW700;
