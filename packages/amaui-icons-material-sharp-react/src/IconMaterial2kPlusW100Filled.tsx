import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusW100Filled'

      short_name='2kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.125.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7Zm-5.175 0h3.7v-.7h-3v-1.55h3V9.4H6.5v.7h3v1.55h-3Zm-2.2 5.1V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial2kPlusW100Filled.displayName = 'AmauiIconMaterial2kPlusW100Filled';

export default IconMaterial2kPlusW100Filled;
