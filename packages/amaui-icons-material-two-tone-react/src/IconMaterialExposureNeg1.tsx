import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1'

      short_name='ExposureNeg1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1.displayName = 'AmauiIconMaterialExposureNeg1';

export default IconMaterialExposureNeg1;
