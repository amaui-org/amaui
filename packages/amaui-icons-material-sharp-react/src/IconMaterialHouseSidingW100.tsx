import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseSidingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingW100'

      short_name='HouseSiding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-8h-.9L12 4.75l6.6 5.95h-.9v8H17v-1.35H7v1.35ZM8.725 8.65h6.55L12 5.7ZM7 12.65h10V10.2l-.95-.85h-8.1L7 10.2Zm0 4h10v-3.3H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingW100.displayName = 'AmauiIconMaterialHouseSidingW100';

export default IconMaterialHouseSidingW100;
