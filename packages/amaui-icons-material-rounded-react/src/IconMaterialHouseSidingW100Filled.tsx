import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseSidingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingW100Filled'

      short_name='HouseSiding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 18.7q-.15 0-.25-.1t-.1-.25v-7.4h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.5-.2t.5.2l5.6 5.05q.2.2.1.45t-.375.25H17.7v7.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1H7v1q0 .15-.1.25t-.25.1ZM8.725 8.65h6.55L12 5.7ZM7 12.65h10V10.2l-.95-.85h-8.1L7 10.2Zm0 4h10v-3.3H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingW100Filled.displayName = 'AmauiIconMaterialHouseSidingW100Filled';

export default IconMaterialHouseSidingW100Filled;
