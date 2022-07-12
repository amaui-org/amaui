import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageTwoTone'
      short_name='Package'

      {...props}
    >
      <path d="M5.4 21.625q-1.275 0-2.15-.875t-.875-2.15V5.4q0-1.275.875-2.15t2.15-.875h13.2q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Zm.975-4h5.575V14.85H6.375ZM7.75 13.05 12 10.925l4.275 2.125V5.4H7.75Z"/>
    </Icon>
  )
});

export default IconMaterialPackageTwoTone;
