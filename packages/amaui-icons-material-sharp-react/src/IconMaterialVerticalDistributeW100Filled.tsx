import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeW100Filled'

      short_name='VerticalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 20.7V20h18.7v.7Zm5-7.85v-1.7h8.7v1.7ZM2.65 4v-.7h18.7V4Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeW100Filled.displayName = 'AmauiIconMaterialVerticalDistributeW100Filled';

export default IconMaterialVerticalDistributeW100Filled;
