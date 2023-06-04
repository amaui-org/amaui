import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlusW100Filled'

      short_name='6kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.125.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7.2 11.65V10.1h3v-.7H6.5v5.2h3.7v-2.95Zm0 2.25v-1.55h2.3v1.55Zm-2.9 5.8V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial6kPlusW100Filled.displayName = 'AmauiIconMaterial6kPlusW100Filled';

export default IconMaterial6kPlusW100Filled;
