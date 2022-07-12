import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectOutlinedW100'
      short_name='Eject'

      {...props}
    >
      <path d="M6.5 18.15V17.55H17.5V18.15ZM6.6 14.55 12 6.5 17.4 14.55ZM12 13.95ZM7.85 13.95H16.15L12 7.75Z"/>
    </Icon>
  )
});

export default IconMaterialEjectOutlinedW100;
