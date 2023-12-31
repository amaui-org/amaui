import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawerFilled'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-338q18-11 38.5-16.5T280-480h400q21 0 41.5 5.5T760-458v-302H200v302Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawerFilled.displayName = 'AmauiIconMaterialBottomDrawerFilled';

export default IconMaterialBottomDrawerFilled;
