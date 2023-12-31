import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toolbar'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-520h560v-120H200v120Zm560 80H200v360h560v-360Zm-560-80v80-80Zm0 0v-120 120Zm0 80v360-360Z"/>
    </Icon>
  );
});

IconMaterialToolbar.displayName = 'AmauiIconMaterialToolbar';

export default IconMaterialToolbar;
