import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawer'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-640v330l50-50h460l50 50v-330H200Zm0 560h560v-120l-80-80H280l-80 80v120Zm0 0h560-560Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawer.displayName = 'AmauiIconMaterialBottomDrawer';

export default IconMaterialBottomDrawer;
