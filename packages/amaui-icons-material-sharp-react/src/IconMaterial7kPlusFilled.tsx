import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kPlusFilled'

      short_name='7kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5ZM11 15h1.5v-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11Zm-4 0h1.75l1.85-6H5.75v1.5H8.4Zm-4 6V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial7kPlusFilled.displayName = 'AmauiIconMaterial7kPlusFilled';

export default IconMaterial7kPlusFilled;
