import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kPlus'

      short_name='7kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5ZM11 15h1.5v-2.25L14.25 15h1.825l-2.325-3 2.325-3H14.25l-1.75 2.25V9H11Zm-4 0h1.75l1.85-6H5.75v1.5H8.4Zm-4 6V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial7kPlus.displayName = 'AmauiIconMaterial7kPlus';

export default IconMaterial7kPlus;
