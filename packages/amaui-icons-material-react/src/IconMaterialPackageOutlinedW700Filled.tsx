import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlinedW700Filled'
      short_name='Package'

      {...props}
    >
      <path d="M5.3 21.85q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h13.4q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912Zm1-4.15H12v-2.9H6.3Zm1.375-4.55L12 11l4.325 2.15V5.3h-8.65Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlinedW700Filled;
