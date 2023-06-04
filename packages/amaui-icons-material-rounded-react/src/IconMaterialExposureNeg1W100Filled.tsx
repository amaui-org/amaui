import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1W100Filled'

      short_name='ExposureNeg1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12.85 4.45q-.15 0-.25-.1t-.1-.25v-10l-2.325 1.6q-.125.075-.25.062-.125-.012-.225-.137-.075-.125-.063-.263.013-.137.138-.212l2.575-1.8q.125-.1.313-.088.187.013.312.088.1.05.162.175.063.125.063.25V17.3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1W100Filled.displayName = 'AmauiIconMaterialExposureNeg1W100Filled';

export default IconMaterialExposureNeg1W100Filled;
