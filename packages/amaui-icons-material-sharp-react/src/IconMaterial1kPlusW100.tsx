import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusW100'

      short_name='1kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.6.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65L15.4 9.4h-1l-2.5 2.35V9.4h-.7Zm-3.1 0h.7V9.4H6.6v.7h1.5Zm-3.8 5.1V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial1kPlusW100.displayName = 'AmauiIconMaterial1kPlusW100';

export default IconMaterial1kPlusW100;
