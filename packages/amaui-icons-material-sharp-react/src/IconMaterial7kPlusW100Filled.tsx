import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kPlusW100Filled'

      short_name='7kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.6.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65L15.4 9.4h-1l-2.5 2.35V9.4h-.7Zm-3.525 0h.75l1.8-5.2H6.3v.7h2.95ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial7kPlusW100Filled.displayName = 'AmauiIconMaterial7kPlusW100Filled';

export default IconMaterial7kPlusW100Filled;
