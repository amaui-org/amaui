import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus1TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1TwoTone'
      short_name='ExposurePlus1'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 18V5h-.3L15 6.7v1.7l3-1.02V18zm-10-1v-4h4v-2h-4V7H8v4H4v2h4v4z"/>
    </Icon>
  );
});

export default IconMaterialExposurePlus1TwoTone;
