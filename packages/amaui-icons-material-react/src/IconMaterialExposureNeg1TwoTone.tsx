import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg1TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1TwoTone'
      short_name='ExposureNeg1'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z"/>
    </Icon>
  );
});

export default IconMaterialExposureNeg1TwoTone;
