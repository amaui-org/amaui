import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial9kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kPlusW100'

      short_name='9kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.125.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7Zm-5.175 0h3.7V9.4H6.5v2.95h3v1.55h-3Zm.7-2.95V10.1h2.3v1.55ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial9kPlusW100.displayName = 'AmauiIconMaterial9kPlusW100';

export default IconMaterial9kPlusW100;
