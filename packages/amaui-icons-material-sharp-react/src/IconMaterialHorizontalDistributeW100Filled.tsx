import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeW100Filled'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 21.35V2.65H4v18.7Zm7.85-5v-8.7h1.7v8.7Zm8.85 5V2.65h.7v18.7Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeW100Filled.displayName = 'AmauiIconMaterialHorizontalDistributeW100Filled';

export default IconMaterialHorizontalDistributeW100Filled;
